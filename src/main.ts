import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { SignColor } from 'signcolorjs'
import { SignColor } from '.'

createApp(App)
.use(SignColor)
.mount('#app')