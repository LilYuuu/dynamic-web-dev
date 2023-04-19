// Adding libraries
const fs = require('fs');
const path = require('path');

let data = [];

const dataPath = path.resolve(__dirname + '/data/myData.json');

// Load in existing data or create an empty data file
if(fs.existsSync(dataPath)){
  // If a data file exists, then load it using fs.readFileSync()
  data = fs.readFileSync(dataPath);
  data = JSON.parse(data);
} else {
  // otherwise create an empty json file in the directory we will write to later.
  fs.writeFileSync(dataPath, JSON.stringify(data));
}

// Get the file size of the file and the timestamp
const fileSize = fs.statSync(dataPath).size / 1000000.0; // to get the size in mb
const currentTime = new Date();

// Create a JSON object entry for the size of the myData.json and timestamp
const metadata = {
  size: fileSize,
  timestamp: currentTime
}

// Push your metadata object to the "data" array
data.push(metadata);

// Write to your file
fs.writeFileSync(dataPath, JSON.stringify(data));