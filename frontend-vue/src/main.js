import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

//import router
import router from './router'

//createApp(App).mount('#app')
const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')