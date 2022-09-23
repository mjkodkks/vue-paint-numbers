# Vue-Paint-Numbers 🟩

Vue-Paint-Numbers is a simple vue directive for paint text color if number is positive or negative by lookup inside inner html element :)


## install
1. install package
```sh
npm install vue-paint-numbers

or

yarn install vue-paint-numbers
```

2. add lib as plugin to vue `main.vue`

vue 3
```js
import { createApp } from 'vue'
import App from './App.vue'

import { VuePaintNumbers } from 'vue-paint-numbers'

createApp(App)
.use(VuePaintNumbers)
.mount('#app')
```
3. done

or you need to use your own custom color
```js
import { createApp } from 'vue'
import App from './App.vue'

import { VuePaintNumbers } from 'vue-paint-numbers'
const signOption = {
    positiveColor: '#7cff66',
    negativeColor: '#ff6680',
    defaultColor: '#000000'
} 

createApp(App)
.use(VuePaintNumbers, signOption)
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