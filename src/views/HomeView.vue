<template>
  <div class="container">
    <div class="header">
      <h1>Ha, I got you!</h1>
      <view-counter class="view-counter" />
    </div>
    <quote />
    <search-bar class="search-bar" />
  </div>
</template>

<script lang="ts">
import json from "@/assets/quotes.json";

import SearchBar from "@/components/SearchBar.vue";
import ViewCounter from "@/components/ViewCounter.vue";
import Quote from "@/components/Quote.vue";

export default {
  data() {
    return {
      quotes: json,
    };
  },
  computed: {
    quote: function () {
      return this.quotes[Math.trunc(Math.random() * this.quotes.length)];
    },
  },
  components: {
    SearchBar,
    ViewCounter,
    Quote,
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
  text-align: center;
}

h1 {
  font-size: 5rem;
}

.header {
  margin-bottom: 2rem;
}

.search-bar {
  margin-top: 2rem;
}
</style>
