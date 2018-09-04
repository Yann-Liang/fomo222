import request from '@/utils/request'
// const TX = require('@/lib/tx')

export function fp3dTimestamp() {
  return request({
    url: `/fp3d/timestamp`,
    method: 'get'
  })
    .then(_rsp => {
      const data = _rsp.data
      if (data.code !== 0) {
        return Promise.reject(data.code)
      } else {
        return Promise.resolve(data.data)
      }
    })
}

export function winnerData() {
  return request({
    url: `/fp3d/winners`,
    method: 'get'
  })
    .then(_rsp => {
      const data = _rsp.data
      if (data.code !== 0) {
        return Promise.reject(data.code)
      } else {
        return Promise.resolve(data.data)
      }
    }) 
}

export function luckies (network) {
  return request({
    url: `/fp3d/luckies`,
    method: 'get'
  })
    .then(_rsp => {
      const data = _rsp.data
      if (data.code !== 0) {
        return Promise.reject(data.code)
      } else {
        return Promise.resolve(data.data)
      }
    })
}

export function gStat (network, address) {
  return request({
    url: `/fp3d/g_stat?player=${address}`,
    method: 'get'
  })
    .then(_rsp => {
      const data = _rsp.data
      if (data.code !== 0) {
        return Promise.reject(data.code)
      } else {
        return Promise.resolve(data.data)
      }
    })
}