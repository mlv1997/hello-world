const express = require("express");
const http = require("http");
 
const app = express();
const port = 8000;
const hostname = "127.0.0.1";
 
// Track when the server starts
const serverStartTime = Date.now();
 
// Middleware to log the request time
app.use((req, res, next) => {
  req.requestTime = Date.now() - serverStartTime;  
  next();
});
 
// Set up routes
app.get("/", (req, res) => {
  res.send(`Hello World! <br> Server requested: <small>${req.requestTime} ms</small>`);
});
 
app.post("/", (req, res) => {
  res.send("POST request");
});
 
app.put("/", (req, res) => {
  res.send("PUT request");
});
 
app.delete("/", (req, res) => {
  res.send("DELETE request");
});
 
// Create the HTTP server
const server = http.createServer(app);
 
// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});