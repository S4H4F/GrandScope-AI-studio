const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- CC Back-End Developer Starting ---');
    await bus.connect();

    setInterval(() => {
        bus.publish('LOGS:CC_BACKEND', { level: 'INFO', msg: 'Back-End Dev Heartbeat' });
    }, 60000);
}

start();
