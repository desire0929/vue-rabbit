//定义懒加载插件
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
    install(app){

        //懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el,binding){
                //el:指令绑定的元素 img
                //binding:指令等于号后面的表达式的值 图片地址
                const { stop } =useIntersectionObserver(el,([{isIntersecting}])=>{
                    if(isIntersecting){ 
                        el.src=binding.value
                        stop()
                    }
                })
            }
        })

    }
}