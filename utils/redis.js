const redis = require('redis');
const path = require('node:path');

class RedisClient {
  constructor() {

  this.client = redis.createClient();

  this.client.on('error', (err) => {
    console.error('Redis client error:', err);
  });
  this.client.connect();
  }

  isAlive() {
    return this.client.isReady;
  }

  async get(key) {
    return this.client.isReady;
  }

  async set(key, value, duration) {
    await this .client.set(key, value, { EX: duration });
  }

  async del(key) {
   await this.client.del(key);
  }  
}

const redisClient = new RedisClient();
module.exports = redisClient;
