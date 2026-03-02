const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- OC Monitoring Agent (Supervisor) Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        await bus.subscribe('LOGS:*', (msg) => {
            console.log(`[LOG ANALYZER] Activity detected: ${JSON.stringify(msg)}`);
        });

        console.log('Supervisor Gateways Online. Monitoring all agents...');

        // Keep process alive
        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'oc-monitor', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start OC Monitor:', err);
    }
}

start();
