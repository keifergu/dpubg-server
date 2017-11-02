const PlayerManager = require('./PlayerManager')

class Room {
  constructor() {
    this.playerManager =  new PlayerManager()
  }

  addPlayer(socket) {
    this.playerManager.addPlayer(socket)
  }
}

module.exports = Room