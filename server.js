const http = require('http');
 
// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
 
// Start server listening on port 3000
server.listen(3000, () => {
  console.log('Server Started on port 3000');
});
