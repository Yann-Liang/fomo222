const etherUtil = require('ethereumjs-util')
const deployed = require('../src/lib/deployed')
const abis = require('../src/lib/abi')
const NETWORK = process.env.NETWORK

const prefix = new Buffer('\x19Ethereum Signed Message:\n')
const delay = 30 * 1000
const errors = require('../src/lib/errors')

let fp3dTimestamp
let winnerData = [];

exports.initFp3d = function(fp3d) {
  fp3d.remainSeconds()
    .then(_time => {
      fp3dTimestamp = _time.toNumber()
      console.log(`reinit fp3d timeout ${fp3dTimestamp}`)
      return
    })
    /*
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
    })*/
    

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

exports.getFp3d = function(web3) {
  if (deployed.fomo222.hasOwnProperty(NETWORK)) {
    const fp3d = new web3.eth.Contract(abis.fomo222, deployed.fomo222[NETWORK])
    return Promise.resolve(fp3d)
  } else {
    return Promise.reject(errors.UNSUPPORTED_NETWORK)
  }
}