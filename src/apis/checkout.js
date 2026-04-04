import httpInstance from '@/utils/http'

export const getCheckInfoApi = () => httpInstance.get('/member/order/pre')