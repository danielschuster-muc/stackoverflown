<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      placeholder="Search on Stack Overflow"
      @keyup.enter="search"
    />
    <button @click="search" :disabled="query == ''">Search</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const query = ref("");

function search() {
  if (query.value) {
    window.location.href = `https://stackoverflow.com/search?q=${query.value}`;
  }
  query.value = "";
}
</script>

<style scoped>
input {
  width: 16rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #ea7809;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:disabled {
  background-color: #ea7809;
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
