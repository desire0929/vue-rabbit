import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    //1.定义state - cartList
    const cartList = ref([])

    //2.定义action - addCart
    const addCart = (goods) => {
        //1.判断购物车中是否已经存在该商品
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
            //2.如果存在，则增加数量
            item.count++
        } else {
            //3.如果不存在，则添加新商品
            cartList.value.push(goods)
        }

    }

    return {
        cartList,
        addCart
    }
}, {
    persist: true
})