const redis = require('redis');
const { promisify }= require('util');
/**
 * Redis utils
 */
class RedisClient {
  constructor() {
    this.client = redis.createClient(); 

    this.client.on('error', (err) => {
      console.error('Error:', err);
    });
    
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.set).bind(this.client);
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
      return await this.client.get(key);
  }

  async set(key, value, duration) {
    await this.setAsync(key, value);
    this.client.expire(expirationInSeconds);    
    }

  async del(key){
    await this.delAsyns(key);
  }
}

module.exports = new RedisClient();
module.export = redisClient;
