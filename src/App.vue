<script setup lang="ts">
import { ref } from 'vue';

  const numb = ref<string | number>('20')

  function randomNumber() {
    const sign = Math.random() < 0.5 ? '' : '-' 
    numb.value = sign + Math.round(Math.random() * 100)
  }
</script>

<template>
  <div>Demo</div>
  <div>
    <div v-paint>123</div>
    <div v-paint>-123</div>
    <div v-paint="{positiveColor: 'yellow', negativeColor: 'orange'}" style="color: red;">0</div>
    <div v-paint>11</div>
    <div>
      <div>Try Random</div>
      <label>Random Number</label>
      <div v-paint>{{numb}}</div>
      <div v-paint="{positiveColor: 'yellow', negativeColor: 'orange'}">{{numb}}</div>
      <div v-paint="{positiveColor: 'yellow'}">{{numb}}</div>
      <button @click="randomNumber">
      Try Random Number</button>
    </div>
  </div>
</template>

<style scoped>

</style>
