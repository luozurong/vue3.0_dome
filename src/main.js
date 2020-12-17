import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
import ElementPlus from 'element-plus';
import './assets/css/index.less'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(store)
app.use(router).mount('#app')
