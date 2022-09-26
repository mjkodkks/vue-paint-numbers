<script>
import { ref } from "vue";
export default {
  name: "DemoComponent",
  setup() {
    const numb = ref("20");

    function randomNumber() {
      const sign = Math.random() < 0.5 ? "" : "-";
      numb.value = sign + Math.round(Math.random() * 100);
    }
    return {
      numb,
      randomNumber,
    };
  },
};
</script>
  
<template>
  <div>Demo</div>
  <div>
    <div v-paint>123</div>
    <div v-paint>-123</div>
    <div v-paint="{ positiveColor: 'yellow', negativeColor: 'orange' }" style="color: red">
      0
    </div>
    <div v-paint>11</div>
    <div>
      <div>Try Random</div>
      <label>Random Number</label>
      <div v-paint>{{ numb }}</div>
      <label>Random Number With Inline Custom Color</label>
      <div v-paint="{ positiveColor: 'yellow', negativeColor: 'orange' }">
        {{ numb }}
      </div>
      <label>Random Number With Inline Custom 'Positive Color Only' Color</label>
      <div v-paint="{ positiveColor: 'blue' }">{{ numb }}</div>
      <button @click="randomNumber">Try Random Number</button>
    </div>
  </div>
</template>
  
<style scoped>

</style>
  