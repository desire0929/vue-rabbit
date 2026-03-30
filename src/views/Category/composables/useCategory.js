//封装分类数据业务相关代码
import { ref, onMounted } from 'vue'
import { getCategoryApi } from '@/apis/category'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()

    const getCategoryData = async (id = route.params.id) => {
    const res = await getCategoryApi(id)
    categoryData.value = res.result
    }

    onMounted(() => getCategoryData())

    //目标：当路由参数发生变化时，重新获取分类数据
    onBeforeRouteUpdate((to) => {
        console.log('路由参数发生变化了')
        getCategoryData(to.params.id)
    })

    return {
        categoryData
    }
}