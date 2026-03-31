import httpInstance from '@/utils/http'

export const getDetailApi = (id) => httpInstance.get(`/goods?id=${id}`)