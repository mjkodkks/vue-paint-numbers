import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// for demo only
// import { SignColor } from 'signcolorjs'
import { ISignColorOption, SignColor } from '../lib'
const signOption: ISignColorOption = {
    positiveColor: 'blue'
} 

createApp(App)
.use(SignColor, signOption)
.mount('#app')