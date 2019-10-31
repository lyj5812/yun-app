import http from '../../common/vmeitime-http/interface'

// 微信小程序用户信息
export function getWxMiniUserInfo() {
  return http.request({
    url: '/admin-server/wxMiniUser/info',
    method: 'get'
  })
}

// 微信小程序登录
export function wxMalogin(data) {
  const grant_type = 'wx_mini_app'
  const appid = uni.getAccountInfoSync().miniProgram.appId
  const code = data.code
  const encryptedData = encodeURIComponent(data.encryptedData)
  const iv = encodeURIComponent(data.iv)
  return http.request({
    url: `/auth-server/oauth/token?code=${code}&appid=${appid}&grant_type=${grant_type}&encryptedData=${encryptedData}&iv=${iv}`,
    header: {
      'Authorization': 'Basic d3hfbWluaV9hcHA6MTIzNDU2'
    },
    method: 'post'
  })
}
