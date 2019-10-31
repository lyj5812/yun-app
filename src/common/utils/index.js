/**
 * 去除url参数
 * @param url
 */
export function getUrl(url) {
  if (url.indexOf('?') != -1) {
    url = url.split('?')[0]
  }
  return url
}
