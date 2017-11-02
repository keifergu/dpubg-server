const fs = require('fs')
const http = require('http')
const socket = require('socket.io')
const gameServer = require('./src/app')

const app = http.createServer(handler)
const io = socket(app)

app.listen(8010)

function handler(req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

gameServer(io)
