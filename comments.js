// Create web server
// Create a web server that listens for requests on port 3000. When a request is received, the server should respond with a status code of 200 and a body that consists of the comments array as a string. 

// Use the built-in http module to create a server
// Use the fs module to read comments.json
// Use the res object to send the response
// Use the listen method to listen for requests on port 3000
// The comments array should be a string
// The server should respond with a status code of 200

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end();
      return;
    }
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});