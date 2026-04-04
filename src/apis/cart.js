import httpInstance from '@/utils/http'

//加入购物车
export const insertCartApi = ({skuId, count}) => httpInstance.post('/member/cart', {skuId, count})

//获取购物车列表
export const getCartListApi = () => httpInstance.get('/member/cart')

//删除购物车
export const delCartApi = (ids) => httpInstance.delete('/member/cart', {data: {ids}})