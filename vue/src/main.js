import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'

import '@/assets/css/theme/index.css'
import request from "@/utils/request"



// 配置文件, 大概是关于服务器端和本地端

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$baseUrl = process.env.VUE_APP_BASEURL
Vue.use(ElementUI, {size: "small"})

new Vue({
    router,
    render: h => h(App),
    mounted() {
        // 初始化 Swiper
        new Swiper('.swiper-container', {
            // 配置 Swiper
        });
    }
}).$mount('#app')

// main.js
ElementUI.Table.props.headerCellStyle = {
    type: [Object, Function],
    default: () => {
        return {
            backgroundColor: 'red'
        }
    }
}
Vue.use(ElementUI);


import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false