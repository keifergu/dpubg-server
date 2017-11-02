const SocketedPlayer = require('./SocketedPlayer')

class PlayerManager {
  constructor() {
    this.playerList = []
  }

  addPlayer(socket) {
    const { length } = this.playerList
    const id = length + 1
    const socketedPlayer = new SocketedPlayer(id, socket, this)
    this.playerList.push(socketedPlayer)
    console.log(this.playerList.map(p => p.id));
  }
}

module.exports = PlayerManager