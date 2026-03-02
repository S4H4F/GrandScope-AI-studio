const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- CC QA & Publishing Monitor (Supervisor) Starting ---');
    try {
        await bus.connect();

        await bus.subscribe('LOGS:CC_*', (msg) => {
            console.log(`[QA MONITOR] Activity detected in Web Dev Team: ${JSON.stringify(msg)}`);
        });

        console.log('QA Supervisor Online. Monitoring Web Dev Team...');

        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'cc-monitor', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start CC Monitor:', err);
    }
}

start();
