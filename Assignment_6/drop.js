const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const db = client.db("mydb"); 
        const collection = await db.dropCollection("customers");

        console.log("Collection deleted");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();
