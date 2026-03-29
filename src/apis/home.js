import httpInstance from '@/utils/http'

//获取banner
export const getBannerApi = (distributionSite = '1') => httpInstance.get('/home/banner', { params: { distributionSite } })

//获取新鲜好物
export const getNewGoodsApi = () => httpInstance.get('/home/new')

//获取人气推荐
export const getHotGoodsApi = () => httpInstance.get('/home/hot')

//获取所有商品模块
export const getGoodsApi = () => httpInstance.get('/home/goods')