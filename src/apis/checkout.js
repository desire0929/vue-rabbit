import httpInstance from '@/utils/http'

export const getCheckInfoApi = () => httpInstance.get('/member/order/pre')

//创建订单
export const createOrderApi = (data) => httpInstance.post('/member/order', data)