import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// for demo only
// import { SignColor } from 'signcolorjs'
import { SignColor } from '../lib'

createApp(App)
.use(SignColor)
.mount('#app')