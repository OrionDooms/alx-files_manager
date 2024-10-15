import { MongoClient } from 'mongodb';
import dotenv from 'dovenv';

dotenv.config();

class DBClient {
  constructor() {

    const host = process.env.DB_HOST || "localhost";
    const post = process.env.DB_PORT || 27017;
    const dataBase = process.env.DB_DATABASE || "files_manager";

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, {useUnifiedTopology: true });

    this.client.connect()
      .then(() => {
        this.db = this.client.db(database);
        console.log('MongoDB connected Successfully');
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
      });
     }
    
	  
    async sAlive() {
      return this.client.isConnected();
    }

    async nbUsers() {
      try {
        const usersCollection = this.db.collection('users');
        return usersCollection.countDocuments();
      } 
      catch (err) {
        console.log(err);
      }
    }
    
    async nbFiles() {
      try {
        const filesCollection = this.db.collection('files');
	return await filesCollectionn.countDocuments();
      }
      catch (err) {
	console.log(err);
      }

  }
}
const dbClinet = new DBClient();
export default dbClient;
