const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} received.`);

  if (req.url === '/') {
    // 如果请求的是根路径，返回index.html文件
    const filePath = path.join(__dirname, 'index.html');
	console.log(filePath);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading index.html: ${err}`);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
   else {
    const filePath = path.join(__dirname, req.url);
	console.log(filePath);
	fs.readFile(filePath, (err, data) => {
	  if (err) {
	    res.writeHead(500);
	    res.end(`Error loading index.html: ${err}`);
	  } else {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(data);
	  }
	});
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});