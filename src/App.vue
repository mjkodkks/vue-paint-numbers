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
    <div v-sign>123</div>
    <div v-sign>-123</div>
    <div v-sign>0</div>
    <div v-sign>11</div>
    <div v-sign>{{numb}}</div>
    <button @click="randomNumber">
    Try Random Number</button>
  </div>
</template>

<style scoped>

</style>
