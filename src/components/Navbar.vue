<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: String;
  description: String;
}>();
</script>

<style scoped>
.greetings {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin: 0;
  color: green;
}

p {
  font-weight: 500;
  font-size: 1rem;
}
</style>
