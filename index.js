// const catMe = require('cat-me');
// // import * as catMe from 'cat-me'

// console.log(catMe());
// // console.log(catMe('nyan'));

// 1. Load your dependencies
const path = require('path');
const express = require('express');
// 2. Instantiate an express instance
const app = express();
// 3. Define a port number to run your server on
const PORT = 3000;

// 4. Get the path to your public directory
const publicURL = path.resolve(`${__dirname}/public`);
// 5. Define the folder which will host your static files 
app.use(express.static(publicURL))

// 6. Define the route where your static HTML fill be found
app.get("/", (req, res, next) => {
  res.sendFile("index.html");
});

// 7. Start your webserver by listening to the port you defined
app.listen(PORT, () => {
  console.log(`see the magic at: http://localhost:${PORT}`)
});