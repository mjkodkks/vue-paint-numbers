# SignColor 🟩

SignColor is a simple vue directive for paint text color if number is positive or negative by lookup inside inner html element :)


# install
1. install package
```sh
npm install signcolor

or

yarn install signcolor
```

2. add lib as plugin to vue `main.vue`

vue 3
```
import { createApp } from 'vue'
import App from './App.vue'
import { SignColor } from '.'

createApp(App)
.use(SignColor)
.mount('#app')

```
vue 2
```
coming soon...
```

# usage
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


