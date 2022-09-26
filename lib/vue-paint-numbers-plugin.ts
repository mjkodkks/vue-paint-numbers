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
        app.directive('paint', (el, binding) => {
            // this will be called for both `mounted` and `updated`
            let inheritOptoin: IVPNOption = {}
            if (binding.value) {
                inheritOptoin = { ...inheritOptoin, ...binding.value }
            }
            const { positiveColor, negativeColor, defaultColor } = { ...defaultOptions, ...options, ...inheritOptoin }
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