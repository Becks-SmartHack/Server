const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

var buffer;

fs = require('fs');
fs.readFile('app-debug.apk', null, function (err,data) {
  if (err) {
    return console.log(err);
  }
  buffer = data;
  console.log(data);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/vnd.android.package-archive');
  res.end(buffer);
});

server.listen(port, hostname, () => {
    console.log(hostname);
    console.log(`Server running at http://${hostname}:${port}/`);
});
