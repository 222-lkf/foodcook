import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import 'amfe-flexible'
import router from './router/index'
// import { Button, Icon } from 'vant'
// import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
// app.use(Button)
// app.use(Icon)

app.mount('#app')
