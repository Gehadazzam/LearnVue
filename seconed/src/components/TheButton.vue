<script setup>
defineProps(
  {
    msg: {
      type: String,
      required: true,
    },
  }
)
</script>
<template>
  <button>
  {{ msg }}
  </button>

</template>
<style scoped>
button {
  background-color: var( --blue-cta-gradient);
  color: var(--white);
  border-radius: 25px;
  padding: 1rem 2rem;
}
</style>