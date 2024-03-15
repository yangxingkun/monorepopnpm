import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Seres from '@serescnn/seres-ui'
import  '@serescnn/seres-ui/ui/es/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(ElementPlus)
app.use(Seres)
app.mount('#app')
