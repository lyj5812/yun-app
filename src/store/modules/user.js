import { wxMalogin, getWxMiniUserInfo } from '@/api/user'
import { setToken } from '@/common/auth'

const state = {
  token: '',
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      // #ifdef  MP-WEIXIN
      uni.login({
        provider: 'weixin',
        success: function(loginRes) {
          console.log(loginRes)
          // 微信小程序用户信息
          uni.getUserInfo({
            provider: 'weixin',
            success: function(infoRes) {
              wxMalogin({ code: loginRes.code, encryptedData: infoRes.encryptedData, iv: infoRes.iv }).then((res) => {
                const { data } = res
                commit('SET_TOKEN', data.access_token)
                setToken(data.access_token, data.expires_in * 1000)
                resolve()
              })
            }
          })
        },
        fail: function(e) {
          reject(e)
        }
      })
      // #endif
      console.log(userInfo)
    })
  },

  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      // #ifdef  MP-WEIXIN
      // 微信小程序用户信息
      getWxMiniUserInfo().then(response => {
        const data = response.data.data
        if (!data) {
          reject('error')
        }
        commit('SET_NAME', data.nickName)
        commit('SET_AVATAR', data.avatarUrl)// 头像
        resolve(data)
      }).catch(error => {
        reject(error)
      })
      // #endif
    })
  }
}

const getters = {
  name: state => state.name,
  avatar: state => state.avatar,
  token: state => state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
