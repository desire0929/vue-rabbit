<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <HomePanel title="人气推荐" subTitle="根据销量和评价进行排序">
        <div>
            我是人气推荐的主体内容
        </div>
    </HomePanel>
    <HomePanel title="新品上市" subTitle="根据上架时间进行排序">
        <div>
            我是新品上市的主体内容
        </div>
    </HomePanel>
</template>