const bus = require('../../shared/redis-client');
require('dotenv').config();

async function start() {
    console.log('--- CC QA & Publishing Monitor (Supervisor) Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        // 1. Project Decomposition Logic
        await bus.subscribe('PROJECTS:NEW', async (project) => {
            console.log(`[CC MONITOR] New project received: ${project.name}`);

            await bus.publish('LOGS:CC_MONITOR', { agent: 'cc-monitor', level: 'INFO', msg: `Decomposing project: ${project.name}` });

            // Simulating decomposition into FE and BE tasks
            const feTask = {
                projectId: project.id,
                type: 'frontend-build',
                requirements: project.requirements.frontend,
                assignedModel: 'anthropic/claude-3-5-sonnet', // Premium for Dev
                timestamp: new Date().toISOString()
            };

            const beTask = {
                projectId: project.id,
                type: 'backend-build',
                requirements: project.requirements.backend,
                assignedModel: 'anthropic/claude-3-5-sonnet',
                timestamp: new Date().toISOString()
            };

            console.log(`[CC MONITOR] Dispatching tasks for ${project.name}`);
            await bus.publish('TASKS:CC_FRONTEND', feTask);
            await bus.publish('TASKS:CC_BACKEND', beTask);
        });

        // 2. Monitoring Activities
        await bus.subscribe('LOGS:CC_*', (msg) => {
            console.log(`[QA MONITOR] Activity detected in Web Dev Team: ${msg.agent}: ${msg.msg}`);
        });

        console.log('QA Supervisor Online. Monitoring and Decomposition enabled.');

        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'cc-monitor', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start CC Monitor:', err);
    }
}

start();
