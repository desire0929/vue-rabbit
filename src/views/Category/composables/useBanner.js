//封装banner轮播图相关业务代码
import { getBannerApi } from '@/apis/home'
import { ref, onMounted } from 'vue'

export function useBanner() {
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerApi(2)
        console.log(res)
        bannerList.value = res.result
    }

    onMounted(() => getBanner())

    return {
        bannerList
    }
}