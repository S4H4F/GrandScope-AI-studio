const redis = require('redis');

/**
 * Shared Redis Client for GrandScope AI Agents
 */
class GrandScopeBus {
    constructor() {
        this.client = redis.createClient({
            url: process.env.REDIS_URL || 'redis://redis:6379',
            password: process.env.REDIS_PASSWORD
        });

        this.client.on('error', (err) => console.error('Redis Bus Error:', err));
    }

    async connect() {
        if (!this.client.isOpen) {
            await this.client.connect();
        }
    }

    async publish(channel, message) {
        await this.connect();
        return this.client.publish(channel, JSON.stringify(message));
    }

    async subscribe(channel, callback) {
        await this.connect();
        return this.client.subscribe(channel, (message) => {
            callback(JSON.parse(message));
        });
    }
}

module.exports = new GrandScopeBus();
