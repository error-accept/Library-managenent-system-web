import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'
import Router from "./router";
import  "./assets/css/base.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
Axios.interceptors.request.use(config => {
        if (config.push === '/about'||config.push==="/") {
            console.log("is sent")
        } else {
            if (localStorage.getItem('token')) {
                //在请求头加入token，名字要和后端接收请求头的token名字一样
                config.headers.token=localStorage.getItem('token');
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });
app.config.globalProperties.$axios=Axios
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
