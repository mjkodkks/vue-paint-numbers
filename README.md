# SignColor 🟩

SignColor is a simple vue directive for paint text color if number is positive or negative by lookup inside inner html element :)


## install
1. install package
```sh
npm install signcolor

or

yarn install signcolor
```

2. add lib as plugin to vue `main.vue`

vue 3
```js
import { createApp } from 'vue'
import App from './App.vue'

import { SignColor } from 'signcolorjs'

createApp(App)
.use(SignColor)
.mount('#app')
```
3. done

or you need to use your own custom color
```js
import { createApp } from 'vue'
import App from './App.vue'

import { SignColor } from 'signcolorjs'
const signOption = {
    positiveColor: '#7cff66',
    negativeColor: '#ff6680',
    defaultColor: '#000000'
} 

createApp(App)
.use(SignColor, signOption)
.mount('#app')
```

vue 2
```
coming soon...
```

## Usage
```vue
<template>
  <div>
    <div v-sign>123</div>
    <div v-sign>-123</div>
  </div>
</template>
```

built with typescript

made with ❤️


## License

MIT License

Copyright (c) [2022] [mjkodonk](https://github.com/mjkodkks)