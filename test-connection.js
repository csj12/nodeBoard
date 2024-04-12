
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://csj1:passwd@cluster0.lwidgse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());