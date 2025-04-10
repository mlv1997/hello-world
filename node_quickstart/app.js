const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;


const uri = "mongodb+srv://Malavikavv:Becool05@cluster0.ix3tlab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// GET 
app.get("/movie", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const myMovie = {
      title: "Malavika Velayudhan Nair",
      year: 2025,
      director: "Student ID-24251612",
      genres: ["Fantasy", "Comedy", "Sci-Fi"],
      rating: 8.5,
    };

    // Insert if it doesn't exist
    const existing = await movies.findOne({ title: myMovie.title });
    if (!existing) {
      const insertResult = await movies.insertOne(myMovie);
      console.log("Inserted document ID:", insertResult.insertedId);
    } else {
      console.log("Document already exists:", existing._id);
    }

    // Query and return
    const movie = await movies.findOne({ title: myMovie.title });
    res.json(movie); // return the full movie document as JSON

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/movie`);
});
