<script setup>
</script>
<template>
  <header>
    <div>
    <img class="logo" alt="fylo logo" src="../assets/images/logo.svg" />
    </div>
      <div>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-inline: 2rem;
}
.logo {
  display: block;
  height: 4rem;
  aspect-ratio: 1 / 1;
  margin: 0 auto 2rem;
}
ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}
</style>