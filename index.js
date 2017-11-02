const fs = require('fs')
const http = require('http')
const socket = require('socket.io')

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

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world'})
  socket.on('status', function (data) {
    console.log(data);
  })
})