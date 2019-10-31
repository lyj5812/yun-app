/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

/*
// 开放的接口
import http from './interface'

http.config.baseUrl = "http://localhost:8080/api/"

http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
})

*/

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
/* export const test = (data) => {
    /!* http.config.baseUrl = "http://localhost:8080/api/"
    //设置请求前拦截器
    http.interceptor.request = (config) => {
        config.header = {
            "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
    } *!/
    //设置请求结束后拦截器
    http.interceptor.response = (response) => {
        console.log('个性化response....')
        //判断返回状态 执行相应操作
        return response;
    }
    return http.request({
        baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
        dataType: 'text',
        data,
    })
}*/
import store from '@/store'
import { getUrl } from '@/common/utils'
export default {
  config: {
    baseUrl: process.env.VUE_APP_BASE_API,
    header: {
      'Content-Type': 'application/json;charset=UTF-8',
      // eslint-disable-next-line no-dupe-keys
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {},
    method: 'GET',
    dataType: 'json', /* 如设为json，会对返回的数据做一次 JSON.parse */
    responseType: 'text',
    success() {},
    fail() {},
    complete() {}
  },
  interceptor: {
    request: null,
    response: null
  },
  request(options) {
    if (!options) {
      options = {}
    }
    options.baseUrl = options.baseUrl || this.config.baseUrl
    options.dataType = options.dataType || this.config.dataType

    if (store.getters['user/token'] && getUrl(options.url) !== '/auth-server/oauth/token') {
      // 让每个请求携带token 请根据实际情况自行修改
      const _token = { 'Authorization': 'Bearer ' + store.getters['user/token'] }
      options.header = Object.assign({}, options.header, _token)
    }

    options.url = options.baseUrl + options.url
    options.data = options.data || {}
    options.method = options.method || this.config.method
    // TODO 加密数据

    // TODO 数据签名

    return new Promise((resolve, reject) => {
      let _config = null

      options.complete = (response) => {
        const statusCode = response.statusCode
        response.config = _config
        if (process.env.NODE_ENV === 'development') {
          if (statusCode === 200) {
            console.log('【' + _config.requestId + '】 结果：' + JSON.stringify(response.data))
          }
        }
        if (this.interceptor.response) {
          const newResponse = this.interceptor.response(response)
          if (newResponse) {
            response = newResponse
          }
        }
        // 统一的响应日志记录
        _reslog(response)
        if (statusCode === 200) { // 成功
          resolve(response)
        } else {
          reject(response)
        }
      }

      _config = Object.assign({}, this.config, options)
      _config.requestId = new Date().getTime()

      if (this.interceptor.request) {
        this.interceptor.request(_config)
      }

      // 统一的请求日志记录
      _reqlog(_config)

      if (process.env.NODE_ENV === 'development') {
        console.log('【' + _config.requestId + '】 地址：' + _config.url)
        if (_config.data) {
          console.log('【' + _config.requestId + '】 参数：' + JSON.stringify(_config.data))
        }
      }

      uni.request(_config)
    })
  },
  get(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'PUT'
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  }
}

/**
 * 请求接口日志记录
 */
function _reqlog(req) {
  if (process.env.NODE_ENV === 'development') {
    console.log('【' + req.requestId + '】 地址：' + req.url)
    if (req.data) {
      console.log('【' + req.requestId + '】 请求参数：' + JSON.stringify(req.data))
    }
  }
  // TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
  const _statusCode = res.statusCode
  if (process.env.NODE_ENV === 'development') {
    console.log('【' + res.config.requestId + '】 地址：' + res.config.url)
    if (res.config.data) {
      console.log('【' + res.config.requestId + '】 请求参数：' + JSON.stringify(res.config.data))
    }
    console.log('【' + res.config.requestId + '】 响应结果：' + JSON.stringify(res))
  }
  // TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
  switch (_statusCode) {
    case 200:
      break
    case 401:
      break
    case 404:
      break
    default:
      break
  }
}

