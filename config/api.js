const http = uni.$u.http

// post请求列表
export const getCardList = (params, config = {}) => http.post('/miniprogram/getCardList', params, config) // 获取卡劵列表
export const unifiedorderOfWx = (params, config = {}) => http.post('/order/unifiedorderOfWx', params, config) // 微信支付预支付
export const getOpenId = (params, config = {}) => http.post('/order/getOpenid', params, config) // 获取openid
export const getBrandEcardList = (params, config = {}) => http.post('/miniprogram/getBrandEcardList', params,
	config) // 获取品牌卡劵列表
export const getOrderData = (params, config = {}) => http.post('/miniprogram/getOrderData', params, config) // 获取订单信息
export const getOrderListByType = (params, config = {}) => http.post('/miniprogram/getOrderListByType', params, config) // 获取订单列表信息
export const getMyCardList = (params, config = {}) => http.post('/miniprogram/getMyCardList', params, config) // 获取我的卡劵订单列表
export const getNotice = (params, config = {}) => http.post('/miniprogram/getNotice', params, config) //获取公告信息

// get请求列表，，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => http.get('/ebapi/public_api/index', data) //获取菜单 举例