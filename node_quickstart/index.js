const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Malavikavv:Becool05@cluster0.ix3tlab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    const myMovie = {
        title: 'Malavika Velayudhan Nair',
        year: 2025,
        director: 'Student ID-24251612',
        genres:['Fantasy','Comedy','Sci-Fi'],
        rating: 8.5
    };
    //Task 1: Insert (avoid duplicates)
    const existing = await movies.findOne({ title: 'Malavika Velayudhan Nair' });
    if (!existing) {
        const insertResult= await movies.insertOne(myMovie);
        console.log('Inserted document ID: ', insertResult.insertedId);
    } else {
        console.log('Document already exists:', existing._id);
    }   
    // Task 2: Query the movie
    const query = { title: 'Malavika Velayudhan Nair'};
    const movie = await movies.findOne(query);
    console.log('Queried movie:', movie);

   } finally {
     await client.close();
   }
 }


run().catch(console.dir);  