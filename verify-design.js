const bus = require('./shared/redis-client');
require('dotenv').config();

async function testDesignWorkflow() {
    console.log('--- Testing GrandScope Design Workflow ---');
    try {
        await bus.connect();

        // 1. Send an OC Writer task
        const writerTask = {
            id: 'task_' + Date.now(),
            type: 'blog-post',
            topic: 'Future of AI 2026',
            complexity: 3
        };
        console.log(`Sending Writer Task: ${writerTask.id}`);
        await bus.publish('TASKS:NEW', writerTask);

        // 2. Send an OC Designer task
        const designerTask = {
            id: 'task_' + (Date.now() + 1),
            type: 'logo',
            topic: 'NeoCore Tech',
            complexity: 8
        };
        console.log(`Sending Designer Task: ${designerTask.id}`);
        await bus.publish('TASKS:NEW', designerTask);

        // 3. Listen for Results
        console.log('Waiting for results...');
        await bus.subscribe('TASKS:RESULTS', (res) => {
            console.log(`[RESULT RECEIVED] Agent: ${res.agent}, TaskID: ${res.taskId}`);
            console.log(`Status: ${res.result.status}, Output: ${res.result.outputPath}`);
        });

        // Keep alive for a bit to see results
        setTimeout(() => {
            console.log('Test complete. Check logs above.');
            process.exit(0);
        }, 10000);

    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

testDesignWorkflow();
