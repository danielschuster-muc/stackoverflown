<template>
  <div class="container">
    <div class="message">
      <h1>Ha, I got you!</h1>
      <p>{{ quote }}</p>
    </div>
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        placeholder="Search on Stack Overflow"
        @keyup.enter="search"
      />
      <button @click="search" :disabled="query == ''">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import json from "@/assets/quotes.json";
export default {
  data() {
    return {
      quotes: json,
      query: "",
    };
  },
  methods: {
    search() {
      if (this.query) {
        window.location.href = `https://stackoverflow.com/search?q=${this.query}`;
      }
      this.query = "";
    },
  },
  computed: {
    quote: function () {
      return this.quotes[Math.trunc(Math.random() * this.quotes.length)];
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.message {
  text-align: center;
}

.message h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

.search-bar {
  margin-top: 2rem;
}

.search-bar input {
  width: 16rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
}

.search-bar button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #ea7809;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.search-bar button:disabled {
  background-color: #ea7809;
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
