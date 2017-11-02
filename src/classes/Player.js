const config = require('../config/config.js')

module.exports = class Player {
  constructor() {
    Object.assign(this, {
      name: config.DEFAULT_PLAYER_NAME,
      positon: {
        x: Math.floor(Math.random() * config.MAP_WIDTH),
        y: Math.floor(Math.random() * config.MAP_HEIGHT),
      },
      health: config.HEALTH,
    })
  }

  move(x, y) {
    this.positon = {
      x,
      y,
    }
  }

  hurt(value) {
    this.health -= value
  }

  cure(value) {
    this.health += value
  }

  get attributes() {
    const { positon, health } = this
    return {
      positon,
      health,
    }
  }
  
  set attributes(value) {
    const { positon, health } = value
    Object.assign(this, {
      positon,
      health,
    })
  }
}
