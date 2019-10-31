const tokenKey = 'token'
/**
 * 设置值带过期时间
 * @param value
 * @param time 过期时间(毫秒)
 */
export function setToken(value, time) {
  const curTime = new Date().getTime()
  uni.setStorageSync(tokenKey, JSON.stringify({ data: value, time: curTime, expTime: time }))
}

/**
 * 获取过期时间的值
 * @returns {boolean|*}
 */
export function getToken() {
  if (!uni.getStorageSync(tokenKey)) {
    return null
  }

  const data = JSON.parse(uni.getStorageSync(tokenKey))
  if (!data || (new Date().getTime() - data.time > data.expTime)) {
    // 过期
    uni.removeStorageSync(tokenKey)
    return null
  } else {
    return data.data
  }
}
