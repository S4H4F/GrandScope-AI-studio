const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- CC Front-End Developer Starting ---');
    await bus.connect();

    setInterval(() => {
        bus.publish('LOGS:CC_FRONTEND', { level: 'INFO', msg: 'Front-End Dev Heartbeat' });
    }, 60000);
}

start();
