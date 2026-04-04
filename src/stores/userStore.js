import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/user.js'
import { useCartStore } from './cartStore'
import { mergeCartApi } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()

    //1.定义管理用户数据的state
    const userInfo = ref({})

    //2.定义获取接口数据的action
    const getUserInfo = async ({account, password}) => {
        const res = await loginApi({account, password})
        userInfo.value = res.result
        //合并购物车操作
        await mergeCartApi(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }

    //退出时清除用户数据
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }

    //3.以对象格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    //开启数据持久化
    persist: true
})
