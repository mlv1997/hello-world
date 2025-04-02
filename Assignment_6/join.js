
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"; // Use 127.0.0.1 instead of localhost for better compatibility
const client = new MongoClient(url);


async function joinCollections() {
    try {
        // Connect to the MongoDB server
        await client.connect();


        const db = client.db("mydb");
        const ordersCollection = db.collection("orders");

        // Perform the $lookup aggregation to join 'orders' with 'products'
        const result = await ordersCollection.aggregate([
            {
                $lookup: {
                    from: "products",          // Join with the 'products' collection
                    localField: "product_id",  // Field in 'orders' collection
                    foreignField: "_id",       // Field in 'products' collection
                    as: "orderdetails"         // Name of the array to hold the matched documents
                }
            }
        ]).toArray();

        console.log("Join Result:");
        console.log(JSON.stringify(result, null, 2)); // Pretty print the result

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close(); // Close the connection
    }
}

joinCollections();
