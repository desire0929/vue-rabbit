import httpInstance from '@/utils/http'

export const getOrderApi = (id) => httpInstance.get(`/member/order/${id}`)