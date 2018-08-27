const etherUtil = require('ethereumjs-util')
const prefix = new Buffer('\x19Ethereum Signed Message:\n')
const delay = 30 * 1000
const errors = require('../src/lib/errors')

let fp3dTimestamp = 0
let winnerData = [];

exports.initFp3d = function(fp3d) {
  fp3d.remainSeconds()
    .then(_time => {
      fp3dTimestamp = _time.toNumber()
      console.log(`reinit fp3d timeout ${fp3dTimestamp}`)
      return fp3d.maxTimeRemain()
    })
    .then(_maxRoundSeconds => {
      fp3d.loadWinners()
        .then(_winners => {
          winnerData = _winners
          console.log(winnerData)
        })

      setInterval(() => {
        fp3d.loadWinners()
          .then(_winners => {
            winnerData = _winners
            console.log(winnerData)
          })
        },
        10 * 60 * 1000)
    })
    

  setInterval(() => {
    fp3d.remainSeconds()
      .then(_time => {
        fp3dTimestamp = _time.toNumber()
        console.log(`reinit fp3d timeout ${fp3dTimestamp}`)
      })
  }, 15 * 1000)
}

exports.getFp3dFinTimestamp = function() {
  return fp3dTimestamp
}

exports.getWinnerData = function() {
  return winnerData
}