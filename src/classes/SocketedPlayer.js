const Player = require('./Player')

const ATTRIBUTES = 'attributes'
const CREATE_PLAYER = 'create_player'

class SocketedPlayer extends Player{
  constructor(id, socket) {
    super()
    this.id = id
    this.socket = socket

    this.__initListener__()
  }

  __initListener__() {
    this.socket.on(CREATE_PLAYER, (...args) => this.onCreatePlayer(...args))
    this.socket.on(ATTRIBUTES, (...args) => this.onSetAttributes(...args))
  }

  onCreatePlayer({name}) {
    this.name = name
    this.emitAttributes(this.attributes)
  }

  onSetAttributes(attributes) {
    this.attributes = attributes
    this.emitAttributes(attributes)
  }

  emitAttributes(attributes) {
    // 向除自己之外的其它socket发送信息
    this.socket.broadcast.emit(ATTRIBUTES, attributes)
  }
}

module.exports = SocketedPlayer
