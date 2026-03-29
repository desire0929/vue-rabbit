import httpInstance from '@/utils/http'

//获取banner
export const getBannerApi = () => httpInstance.get('/home/banner')