import { App, Plugin } from 'vue';
import { IVPNOption } from '.';

// default option
const defaultOptions: IVPNOption = {
    positiveColor: 'green',
    negativeColor: 'red',
    defaultColor: ''
}

// The Install function used by Vue to register the plugin
export default {
    install(app: App, options: IVPNOption = {}) {
        app.directive('sign', (el, binding) => {
            // this will be called for both `mounted` and `updated`
            // el.style.color = binding.value
            // console.dir(el)
            const { positiveColor, negativeColor, defaultColor } = { ...defaultOptions, ...options }
            // console.log(positiveColor)

            const num = +el.innerText
            let color: string | undefined
            if (num > 0) {
                color = positiveColor
            } else if (num < 0) {
                color = negativeColor
            } else {
                color = defaultColor
            }
            el.style.color = color || ''
        })
    }
} as Plugin