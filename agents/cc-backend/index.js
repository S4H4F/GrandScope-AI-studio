const bus = require('../../shared/redis-client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function start() {
    console.log('--- CC Back-End Developer Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        await bus.subscribe('TASKS:CC_BACKEND', async (task) => {
            console.log(`[CC BACKEND] Building API for project: ${task.projectId}`);

            await bus.publish('LOGS:CC_BACKEND', { agent: 'cc-backend', level: 'INFO', msg: `Building API routes: ${task.requirements}` });

            // Simulate build latency
            await new Promise(resolve => setTimeout(resolve, 5000));

            const outputPath = `outputs/code/backend_${Date.now()}.js`;
            const dir = path.dirname(outputPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            const codeContent = `// Express API for project ${task.projectId}\napp.get('/api', (req, res) => res.json({ msg: 'Ready' }));`;
            fs.writeFileSync(outputPath, codeContent);

            const response = {
                projectId: task.projectId,
                agent: 'cc-backend',
                result: {
                    status: 'COMPLETED',
                    outputPath: outputPath
                }
            };

            await bus.publish('TASKS:RESULTS', response);
            await bus.publish('LOGS:CC_BACKEND', { agent: 'cc-backend', level: 'INFO', msg: `Back-end build finished: ${outputPath}` });
        });

        console.log('Back-End Agent Online. Listening for tasks...');

        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'cc-backend', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start CC Back-End:', err);
    }
}

start();
