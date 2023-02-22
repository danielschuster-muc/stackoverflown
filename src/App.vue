<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <main>
      <RouterView />
    </main>
    <footer>
      <a href="https://github.com/danielschuster-muc/stackoverflown">Source</a>
      <p>Made with ❤ by Daniel Schuster</p>
      <a href="https://danielschuster.me/legal-notice">Imprint</a>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #1b1b1b;
  color: #ea7809;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer {
  flex-shrink: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
}

@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
    text-align: center;
  }
}

a {
  color: #ea7809;
}

a:hover {
  opacity: 0.7;
}
</style>
