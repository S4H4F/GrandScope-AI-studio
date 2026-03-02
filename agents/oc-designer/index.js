const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- OC Designer Starting ---');
    await bus.connect();

    setInterval(() => {
        bus.publish('LOGS:OC_DESIGNER', { level: 'INFO', msg: 'Designer Heartbeat' });
    }, 60000);
}

start();
