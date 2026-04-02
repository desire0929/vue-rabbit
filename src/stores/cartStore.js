import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    //定义state - cartList
    const cartList = ref([])

    //定义action - addCart
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

    //定义action - delCart
    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => item.skuId ===skuId)
        cartList.value.splice(index,1)
    }

    //定义action - singleCheck
    const singleCheck = (skuId, selected) => {
        //根据skuId找到对应的商品，并更新其selected属性
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    //计算属性
    const totalCount = computed(() => cartList.value.reduce((total, item) => total + item.count, 0))
    const totalPrice = computed(() => cartList.value.reduce((total, item) => total + item.count * item.price, 0))

    return {
        cartList,
        addCart,
        delCart,
        singleCheck,
        totalCount,
        totalPrice
    }
}, {
    persist: true
})