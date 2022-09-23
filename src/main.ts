import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// for demo only
// import { VuePaintNumbers } from 'vue-paint-numbers'
import { IVPNOption, VuePaintNumbers } from '../lib'
const signOption: IVPNOption = {
    positiveColor: 'blue'
} 

createApp(App)
.use(VuePaintNumbers, signOption)
.mount('#app')