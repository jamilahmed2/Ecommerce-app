import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import colors from 'colors'

const connect = async () => {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set('strictQuery', true);
  const db = await mongoose.connect(getUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Database Connected'.bgGreen.white);
  return db;
};

export default connect
