<template>
  <p>{{ quote }}</p>
</template>

<script lang="ts">
import json from "@/assets/quotes.json";

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
};
</script>

<style scoped>
p {
  font-style: italic;
}
</style>
