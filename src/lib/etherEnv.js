const Web3 = require("web3")

const ethState = {
  frontEnd: true,
  web3Connect: false
}

const ERR_CODES = require('./errors')
let inited = false

function initEnv(web3, timeout) {
  let returned = false

  if (!timeout) {
    timeout = 120
    console.log(`use timeout ${timeout}`)
  }

  let _r, _j
  let ret = new Promise((r, j) => {
    _r = function() {
      if(returned) {
        return
      } else {
        returned = true
        return r.apply(this, arguments)
      }
    }

    _j = function() {
      if(returned) {
        return
      } else {
        returned = true
        return j.apply(this, arguments)
      }
    }

    setTimeout(() => {
      if (!returned) {
        returned = true
        return j(ERR_CODES.NETWORK_UNCONNECTED)
      }
    }, timeout * 1000)
  })
  
  if (inited) {
    return _r(ethState)
  }

  if (!web3) {
    // return Promise.reject(ERR_CODES.WEB3_MISS)
    // initial a cumston web3
    if (typeof Web3 == 'undefined') {
      return _j(ERR_CODES.WEB3_MISS)
    } else {
      web3 = new Web3()
      //create a in page web3, only for main net
      //don't know if it will working yet
      web3.setProvider(new web3.providers.HttpProvider(`https://ropsten.infura.io/vAugb8H4cG1bOuFMZj3y`))
    }
  }

  if (typeof window !== 'undefined') {
    ethState.frontEnd = true
  } else {
    ethState.frontEnd = false
  }

  if (web3.hasOwnProperty('__proxy__')) {
    ethState.web3Connect = false
  } else {
    ethState.web3Connect = true
  }

  ethState.web3 = web3

  let tmp = new Promise((r, j) => {
    web3.version.getNetwork((err, net) => {
      if (err) {
        console.log(`fail to get network ${err}`)
        return _j(ERR_CODES.NETWORK_UNCONNECTED)
      } else {
        ethState.network = net
        return _r(ethState)
      }
    })
  })
    .then(() => {
      const address = web3.eth.defaultAccount
      console.log(`account ${address}`)
      if (web3.isAddress(address)) {
        ethState.address = address
        ethState.BigNumber = ethState.web3.BigNumber
        return ethState
      } else {
        return ethState
        // we don't fail if no account found
        // return _j(ERR_CODES.ACCOUNT_LOCKED)
      }
    })
    .then(state => {
      inited = true
      return _r(state)
    })
    .catch(err => {
      return _j(err)
    })
  return ret
}

function getEthBalance() {
  if (ethState.hasOwnProperty('web3')) {
    const web3 = ethState.web3
    if (ethState.hasOwnProperty('address') && web3.isAddress(ethState.address)) {
      return new Promise((r, j) => {
        web3.eth.getBalance(ethState.address, (err, b) => {
          if (err) {
            console.log(`fail to get eth balance`, err)
            return j(ERR_CODES.RPC_ERROR)
          } else {
            return r(b)
          }
        })
      })
        .then(_balance => {
          return web3.fromWei(_balance)
        })
    } else {
      return Promise.reject(ERR_CODES.ACCOUNT_LOCKED)
    }
  } else {
    return Promise.reject(ERR_CODES.NETWORK_UNCONNECTED)
  }
}
// exports.Init = initEnv
// exports.STATE = ethState
exports.Init = initEnv
exports.STATE = ethState
exports.getEthBalance = getEthBalance
// { initEnv as Init, ethState as STATE }

const ETHERSCAN = {
  '1': 'https://etherscan.io',
  '3': 'https://ropsten.etherscan.io',
  '4': 'https://rinkeby.etherscan.io/'
}

function _txEtherscan(networkId, txHash) {
  return `${ETHERSCAN[networkId]}/tx/${txHash}`
}

exports.txOnEtherscan = function(txid) {
  return _txEtherscan(ethState.network, txid)
}

function _contractEtherscan(networkId, address) {
  return `${ETHERSCAN[networkId]}/address/${address}`
}

exports.contractOnEtherscan = function(address) {
  return _contractEtherscan(ethState.network, address)
}

exports.getBalanceOf = function(address) {
  return new Promise((r, j) => {
    ethState.web3.eth.getBalance(address, (err, balance) => {
      if (err) {
        console.log(`fail to get balance of user ${address} ${err}`)
        j(ERR_CODES.RPC_ERROR)
      } else {
        r(balance)
      }
    })
  })
}

export function getAuth() {
  return new Promise((resolve, reject) => {
    const timestamp = Date.now().toString()
    ethState.web3.personal.sign(ethState.web3.sha3(timestamp), ethState.address, (err, key) => {
      if (err) {
        reject(err)
      } else {
        resolve({ key, timestamp, address: ethState.address })
      }
    })
  })
}
