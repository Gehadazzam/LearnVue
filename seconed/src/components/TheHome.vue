<script setup>
import TheButton from '@/components/TheButton.vue';
import {ref, computed, watch} from 'vue';
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const mssg = ref(props.msg)
const hello = ref(props.msg)
const emit = defineEmits(['reset'])
const reset = () => {
  emit('reset', hello.value)
}
watch(hello, (newVal, oldVal) => {
  hello.value = newVal
})
</script>
<template>
  <section>
    <h1 class="text-red-500">{{hello}}</h1>
    <input v-model="hello" type="text" />
    <TheButton @click="reset" msg="Reset" />
  </section>
  <section>
    <img src="../assets/images/illustration-intro.png" alt="illustration-intro" />
    <h1>All your files in one secure location, accessible anywhere.</h1>
    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
    <TheButton msg="Get Started" />
  </section>
</template>
<style scoped></style>