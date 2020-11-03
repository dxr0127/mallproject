import Axios from 'axios'
import store from '../../store/store'

const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse('cbf5604e94f364ed') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('106d46f29f9ea389') // 十六位十六进制数作为密钥偏移量
// 解密方法
function Decrypt (word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  // console.log(decrypt)
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  // console.log(decryptedStr)
  return decryptedStr.toString()
}
// 接口地址
let baseurl = 'https://app2.jinpeiwang.cn'
// let baseurl = '/apis'

// 验证参数设置
const crypto = require('crypto')
// 参数验证
export function commonParam (secondurl) {
  let uid = localStorage.getItem('uid')
  let token = Decrypt(localStorage.getItem('token'))
  let firsturl = 'www.jinpeiwang.cn'
  // console.log(firsturl)
  let timestamp = Date.parse(new Date()) * 0.001
  let signurl = firsturl + secondurl + '&uid=' + uid + '&timestamp=' + timestamp + '&token=' + token
  // console.log(signurl)
  let md5 = crypto.createHash('md5')
  md5.update(signurl)
  let sign = md5.digest('hex').substr(6, 10)
  // console.log(sign)
  let comUrl = secondurl + '?uid=' + uid + '&timestamp=' + timestamp + '&token=' + token + '&sign=' + sign + '&devicetype=web' + '&version=1.0.1'
  return baseurl + comUrl
}
// 封装ajax get
export function mygetajax (param, callback) {
  // alert(param)
  Axios.get(param).then(function (res) {
    callback(res)
  }).catch(function (err) {
    callback(err)
  })
}
// 封装ajax post
var qs = require('qs')
export function mypostajax (param, data, callback) {
  // alert(param)
  Axios.post(param, qs.stringify(data)).then(function (res) {
    // alert(JSON.stringify(res))
    callback(res)
  }).catch(function (err) {
    callback(err)
  })
}
Axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.data.status === '8') {
      store.commit('loginout', true)
    } else {
      return response
    }
  }
})
