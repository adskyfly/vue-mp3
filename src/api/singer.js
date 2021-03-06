import jsonp from 'common/js/jsonp'
import {CommonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, CommonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 300,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

export function getSingerData(id) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, CommonParams, {
    platform: 'yqq',
    needNewCode:0,
    singermid: id,
    order:'listen',
    begin:0,
    num:300,
    songstatus:1
  })

  return jsonp(url, data, options)
}
