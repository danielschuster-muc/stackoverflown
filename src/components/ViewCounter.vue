<template>
  <div>
    <p>Just as {{ formattedViews }} others</p>
  </div>
</template>

<script setup lang="ts">
const viewCount = Math.floor(Math.random() * (100_000 - 1_000 + 1)) + 1_000;
const formattedViews = new Intl.NumberFormat().format(viewCount);
</script>

<style scoped>
p {
  font-size: 0.8rem;
}
</style>
