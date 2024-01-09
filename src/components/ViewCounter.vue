<template>
  <div>
    <p v-if="viewCount && viewCount > 0">{{ formattedViews }}</p>
    <p v-else>...</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      viewCount: 0,
    };
  },
  async mounted() {
    await this.incrementOrGetViews();
  },
  methods: {
    async incrementOrGetViews() {
      const hasNotViewed = localStorage.getItem("viewed") !== "true";

      if (hasNotViewed) {
        localStorage.setItem("viewed", "true");
      }

      const method = hasNotViewed ? "POST" : "GET";

      const result = await fetch("/api/views", {
        method,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .catch(() => {
          return { views: 0 };
        });

      const { views } = result;
      this.viewCount = views;
    },
  },
  computed: {
    formattedViews() {
      return new Intl.NumberFormat().format(this.viewCount);
    },
  },
};
</script>

<style scoped>
p {
  font-size: 0.8rem;
}
</style>
