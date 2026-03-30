import httpInstance from '@/utils/http'


export const getCategoryApi = (id) => httpInstance.get(`/category?id=${id}`)

//获取二级分类列表数据
export const getCategoryFilterApi = (id) => httpInstance.get(`/category/sub/filter?id=${id}`)

//获取导航数据
export const getSubCategoryApi = (data) => httpInstance.post('/category/goods/temporary', data)