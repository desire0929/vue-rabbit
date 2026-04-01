import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//import './assets/main.css'

//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载指令插件并注册
import { lazyPlugin } from './directives'
//引入全局组件插件并注册
import { componentPlugin } from './components'

const app = createApp(App)
const pinia = createPinia()

//注册持久化插件
pinia.use(piniaPluginPersistedstate) //设置state时会自动把数据存储到localStorage中，刷新页面时会从localStorage中读取数据进行初始化state

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

