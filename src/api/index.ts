import request from './request'

export default {
  // 获取城市
  getCity: (provinceId: number) => {
    return request({
      url: '/qsm-city/getCity',
      params: { provinceId },
    })
  },
  // 获取手机验证码
  getSmsCode: (data: { phone: string }) => {
    return request({
      url: '/qsm-sms/getCode',
      method: 'post',
      data,
    })
  },
  // 发送手机验证码
  sendSmsCode: (phone: string) => {
    return request({
      url: '/qsm-sms/send',
      method: 'post',
      data: { phone },
    })
  },
  // 获取结果
  getAnswer: (data: any) => {
    return request({
      url: '/qsm-visit/getAnswer',
      method: 'post',
      data,
    })
  },
}
