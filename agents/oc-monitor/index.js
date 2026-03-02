const bus = require('../../shared/redis-client');
const costModels = require('../../shared/cost-models.json');
require('dotenv').config();

async function start() {
    console.log('--- OC Monitoring Agent (Supervisor) Starting ---');
    try {
        await bus.connect();
        console.log('Connected to Redis Message Bus.');

        // 1. Task Routing Logic
        await bus.subscribe('TASKS:NEW', async (task) => {
            console.log(`[OC MONITOR] New task received: ${task.type} - ${task.topic}`);

            // Simple Classification
            let targetAgent = '';
            const contentTypes = ['blog-post', 'white-paper', 'social-post', 'email-sequence', 'script'];
            const designTypes = ['logo', 'brand-kit', 'image-gen', 'video-gen'];

            if (contentTypes.includes(task.type)) {
                targetAgent = 'OC_WRITER';
            } else if (designTypes.includes(task.type)) {
                targetAgent = 'OC_DESIGNER';
            } else {
                console.warn(`[OC MONITOR] Unknown task type: ${task.type}. Routing to OC_WRITER as fallback.`);
                targetAgent = 'OC_WRITER';
            }

            // Model Selection based on complexity (1-10)
            const complexity = task.complexity || 3; // Default to Free tier if not specified
            let tier = 'Free';
            if (complexity >= 7) tier = 'Premium';
            else if (complexity >= 4) tier = 'Budget';

            // Find first model in costModels that matches the tier
            const model = Object.entries(costModels.models).find(([name, data]) => data.tier === tier)?.[0] || 'deepseek/v3';

            const enrichedTask = {
                ...task,
                assignedModel: model,
                tier: tier,
                timestamp: new Date().toISOString()
            };

            console.log(`[OC MONITOR] Routing task to ${targetAgent} using ${model} (${tier})`);
            await bus.publish(`TASKS:${targetAgent}`, enrichedTask);
        });

        // 2. Log Analysis
        await bus.subscribe('LOGS:*', (msg) => {
            if (msg.level === 'CRITICAL' || msg.level === 'ERROR') {
                console.error(`[ALERT] ${msg.agent}: ${msg.msg}`);
                // In a real app, this would trigger Telegram/Email
            } else {
                console.log(`[LOG ANALYZER] ${msg.agent}: ${msg.msg}`);
            }
        });

        console.log('Supervisor Gateways Online. Monitoring and Routing enabled.');

        // Keep process alive & Pulse
        setInterval(() => {
            bus.publish('HEALTH_CHECK', { agent: 'oc-monitor', status: 'OK', timestamp: new Date().toISOString() });
        }, 60000);

    } catch (err) {
        console.error('Failed to start OC Monitor:', err);
    }
}

start();
