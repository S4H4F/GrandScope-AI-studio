const bus = require('../../shared/redis-client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function start() {
    console.log('--- CC Front-End Developer Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        await bus.subscribe('TASKS:CC_FRONTEND', async (task) => {
            console.log(`[CC FRONTEND] Building UI for project: ${task.projectId}`);

            await bus.publish('LOGS:CC_FRONTEND', { agent: 'cc-frontend', level: 'INFO', msg: `Building components: ${task.requirements}` });

            // Simulate build latency
            await new Promise(resolve => setTimeout(resolve, 5000));

            const outputPath = `outputs/code/frontend_${Date.now()}.tsx`;
            const dir = path.dirname(outputPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            const codeContent = `// React Component for project ${task.projectId}\nexport const App = () => <div>Hello World</div>;`;
            fs.writeFileSync(outputPath, codeContent);

            const response = {
                projectId: task.projectId,
                agent: 'cc-frontend',
                result: {
                    status: 'COMPLETED',
                    outputPath: outputPath
                }
            };

            await bus.publish('TASKS:RESULTS', response);
            await bus.publish('LOGS:CC_FRONTEND', { agent: 'cc-frontend', level: 'INFO', msg: `Front-end build finished: ${outputPath}` });
        });

        console.log('Front-End Agent Online. Listening for tasks...');

        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'cc-frontend', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start CC Front-End:', err);
    }
}

start();
