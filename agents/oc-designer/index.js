const bus = require('../../shared/redis-client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function start() {
    console.log('--- OC Designer Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        await bus.subscribe('TASKS:OC_DESIGNER', async (task) => {
            console.log(`[OC DESIGNER] Processing task: ${task.type} - ${task.topic}`);

            await bus.publish('LOGS:OC_DESIGNER', { agent: 'oc-designer', level: 'INFO', msg: `Generating design for: ${task.topic}` });

            // Simulate design generation latency
            await new Promise(resolve => setTimeout(resolve, 3000));

            const outputPath = `outputs/design/${task.type}_${Date.now()}.txt`;
            const dir = path.dirname(outputPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            const designContent = `Design concept for ${task.topic} (${task.type})\nColors: #391a05, #e2d1a1\nModel: ${task.assignedModel}`;
            fs.writeFileSync(outputPath, designContent);

            const response = {
                taskId: task.id,
                agent: 'oc-designer',
                result: {
                    status: 'COMPLETED',
                    outputPath: outputPath,
                    assets: [outputPath]
                }
            };

            await bus.publish('TASKS:RESULTS', response);
            await bus.publish('LOGS:OC_DESIGNER', { agent: 'oc-designer', level: 'INFO', msg: `Design finished and saved to ${outputPath}` });
        });

        console.log('Designer Agent Online. Listening for tasks...');

        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'oc-designer', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start OC Designer:', err);
    }
}

start();
