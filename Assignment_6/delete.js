const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        

        const db = client.db("mydb");
        const collection = db.collection("customers");

        const myquery = { name: 'Abin' }; 
        const result = await collection.deleteOne(myquery); 

        console.log("1 document deleted", result);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
