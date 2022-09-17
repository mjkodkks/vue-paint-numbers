import { App, Plugin } from 'vue';
import { ISignColorOption } from './types/option';

// The Install function used by Vue to register the plugin
export default {
    install(app: App, Option: ISignColorOption) {
        app.directive('sign', (el, binding) => {
            // this will be called for both `mounted` and `updated`
            // el.style.color = binding.value
            // console.dir(el)
            const num = +el.innerText
            let color: string
            if (num > 0) {
                color = 'green'
            } else if(num < 0) {
                color = 'red'
            } else {
                color = ''
            }
            el.style.color = color
        })
    }
} as Plugin