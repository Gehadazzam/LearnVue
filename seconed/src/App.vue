<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHome from './components/TheHome.vue'
import { ref } from 'vue'
const msg = ref('Hello Vue 3 + Vite')
const handleReset = (val) => {
  console.log(val)
}
</script>

<template>
  <TheHeader />
  <TheHome v-model:msg="msg" @reset="handleReset"/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
