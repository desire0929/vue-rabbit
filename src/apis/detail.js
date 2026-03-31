import httpInstance from '@/utils/http'

export const getDetailApi = (id) => httpInstance.get(`/goods?id=${id}`)

export const getHotGoodsApi = ({ id, type, limit = 3 }) => 
  httpInstance.get('/goods/hot', { params: { id, type, limit } })