import request from '@/utils/request.js'
/**
 * 获取用户信息
 * @param {*} id
 * @returns
 */
export function getUserInfo(id) {
  return request({
    url: `/api/user/get`,
    method: 'get',
  })
}
