import httpInstance from '@/utils/http'

//获取banner
export const getBannerApi = () => httpInstance.get('/home/banner')

//获取新鲜好物
export const getNewGoodsApi = () => httpInstance.get('/home/new')

//获取人气推荐
export const getHotGoodsApi = () => httpInstance.get('/home/hot')