import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
//     binary: {
//       version: '6.0.6',
//     },
//   })
// 
// e.g., backend/src/test/globalSetup.js
// const { MongoMemoryServer } = require('mongodb-memory-server');

// const mongod = await MongoMemoryServer.create({
  binary: {
    version: '6.0.6', // or any supported version
  },
});

  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}
