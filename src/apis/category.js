import httpInstance from '@/utils/http'


export const getCategoryApi = (id) => httpInstance.get(`/category?id=${id}`)

