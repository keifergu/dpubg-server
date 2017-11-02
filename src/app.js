const Room = require('./classes/Room')

module.exports =  function app(io) {
  const room = new Room()
  io.on('connection', (socket) => {
    room.addPlayer(socket)
 }) 
}
