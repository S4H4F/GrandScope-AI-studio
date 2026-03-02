const bus = require('./shared/redis-client');
require('dotenv').config();

async function testDevWorkflow() {
    console.log('--- Testing GrandScope Web Dev Workflow ---');
    try {
        await bus.connect();

        // 1. Send a Project
        const project = {
            id: 'proj_' + Date.now(),
            name: 'E-commerce Site',
            requirements: {
                frontend: 'Landing page with product grid',
                backend: 'REST API for products'
            }
        };
        console.log(`Sending Project: ${project.name}`);
        await bus.publish('PROJECTS:NEW', project);

        // 2. Listen for Results
        console.log('Waiting for build results...');
        await bus.subscribe('TASKS:RESULTS', (res) => {
            console.log(`[RESULT RECEIVED] Agent: ${res.agent}, ProjectID: ${res.projectId}`);
            console.log(`Status: ${res.result.status}, Output: ${res.result.outputPath}`);
        });

        // Keep alive for a bit to see results
        setTimeout(() => {
            console.log('Test complete. Check logs above.');
            process.exit(0);
        }, 15000);

    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

testDevWorkflow();
