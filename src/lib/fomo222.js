const deployed = require('./deployed')
const abi = require('./abi')
const async = require('async')
const Contract = require('./contract')
function Fomo222(address, web3, callback) {
  const self = this
  self.web3 = web3
  self.c = new Contract(
    web3.eth.contract(abi.fomo222).at(address)
  )

  self.params = {}

  const props = [
    'luckyNumber',
    'toSpread',
    'toOwner',
    'toRefer',
    'toPool',
    'toLucky',
    'timeIncrease',
    'registerFee',
    'withdrawFee',
    'minimumWithdraw',
    'roundTime',
    'timeIncrease'    
  ]

  async.each(
    props,
    (prop, callback) => {
      self.c[prop]()
        .then(_value => {
          self.params[prop] = _value
          callback()
        })
    },
    callback
  )
}

Fomo222.prototype.remainSeconds = function() {
  return this.c.remainTime(0)
}

Fomo222.prototype.priceForKeys = function(n) {
  n = n * (Math.pow(10, 18))
  return this.c.priceForKeys(n, 0)
}

Fomo222.prototype.price = function(n) {
  return this.c.priceForKeys(n, 0)
}

Fomo222.prototype.round = function() {
  return Promise.resolve(0)
}

Fomo222.prototype.buy = function(value, ref) {
  if(!ref) {
    ref = 0
  }
  return this.c.BuyKeys(ref, 0, { value })
}

Fomo222.prototype.reloadKeys = function(value, ref) {
  value = value.mul(Math.pow(10, 18))
  return this.c.ReloadKeys(ref, 0, value)
}

Fomo222.prototype.currentRound = function() {
  return this.c.gameRound()
}

Fomo222.prototype.register = function(ref) {
  return this.c.register(ref)
}

Fomo222.prototype.totalProfit = function(addr) {
  return this.c.totalProfit(addr)
}

Fomo222.prototype.finalize = function(round) {
  return this.c.finalize(round)
}

Fomo222.prototype.withdrawal = function(addr) {
  const self = this
  return self.totalProfit(addr)
    .then(_profit => {
      if(_profit.lt(self.params.minimumWithdraw)) {
        // u can't withdraw
        return Promise.reject(errors.BALANCE_NOT_ENOUGH)
      } else {
        return self.c.withdrawal()
      }
    })
}

Fomo222.prototype.ethForKey = function(keys, round) {
  const self = this
  return self.c.priceForKeys(keys, round)
}

/*
Fomo222.prototype.buy = function(round, value, ref) {
  const self = this
  return self.c.BuyKeys(ref, round, { value })
}

Fomo222.prototype.reload = function(round, value, ref) {
  const self = this
  return self.c.ReloadKeys(ref, round, value)
}
*/

Fomo222.prototype.start1stRound = function() {
  return this.c.start1stRound()
}

Fomo222.prototype.userReferId = function(addr) {
  return this.c.playerIds(addr)
}

Fomo222.prototype.stat = function(address) {
  const stat = {}
  const self = this
  stat.currentRound = 0
  return self.c.admin()
    .then(_owner => {
      stat.owner = _owner
      return self.c.decimals()
    })
    .then(_decimals => {
      stat.decimals = _decimals.toNumber()
      return self.c.gameRound()
    })
    .then(_round => {
      stat.round_eth = _round[0].dividedBy(Math.pow(10, 18)).toNumber()
      stat.round_keys = _round[1].dividedBy(stat.decimals).toNumber()
      stat.mask = _round[2]
      stat.winner = _round[3]
      stat.pool = _round[4].dividedBy(Math.pow(10, 18)).toNumber()
      stat.nextLucky = _round[6].toNumber()
      stat.luckCounter = _round[7].toNumber()
      stat.luckPool = _round[8].dividedBy(Math.pow(10, 18)).toNumber()
      if (address) {
        return self.c.playerIds(address)
      } else {
        return -1
      }
    })
    .then(_id => {
      if (_id == -1) {
        stat.id = -1
        stat.wallet = 0
        stat.affiliate = 0
        stat.win = 0
        stat.player_eth = 0
        stat.player_keys = 0
        stat.profit = 0

      } else {
        stat.id = _id.toNumber()
        return self.c.players(address)
          .then(_player => {
            // stat.wallet = _player[1].dividedBy(Math.pow(10, 18)).toNumber()
            stat.affiliate = _player[3].dividedBy(Math.pow(10, 18)).toNumber()
            stat.win = _player[5].dividedBy(Math.pow(10, 18)).toNumber()
            return self.c.playerRoundData(address, stat.currentRound)
          })
          .then(_playerRound => {
            stat.player_eth = _playerRound[0].dividedBy(Math.pow(10, 18)).toNumber()
            stat.player_keys = _playerRound[1].dividedBy(stat.decimals).toNumber()
            return self.c.profit(address)
          })
          .then(_profit => {
            stat.profit = _profit.dividedBy(Math.pow(10, 18)).toNumber()
            stat.wallet = stat.profit - stat.affiliate - stat.win
          })
      }
    })
    .then(() => {
      return self.priceForKeys(1)
    })
    .then(_price => {
      stat.price = _price.dividedBy(Math.pow(10, 18)).toNumber()
      return stat
    })
}

exports.getFp222 = function(web3) {
  if(deployed.fomo222.hasOwnProperty(web3.version.network)) {
    return new Promise((r, j) => {
      const fomo222 = new Fomo222(deployed.fomo222[web3.version.network], web3, (err) => {
        if (err) {
          j(err)
        } else {
          r(fomo222)
        }
      })
    })
  } else {

  }
}