<template>
  <p>{{ quote }}</p>
</template>

<script setup lang="ts">
import json from "@/assets/quotes.json";

defineOptions({ name: "AppQuote" });

const quote = json[Math.trunc(Math.random() * json.length)];
</script>

<style scoped>
p {
  font-style: italic;
}
</style>
