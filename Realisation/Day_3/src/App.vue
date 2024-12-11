<template>
  <div>
    <nav aria-label="breadcrumb">
      <ul>
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link v-if="crumb.path" :to="crumb.path">{{
            crumb.name
          }}</router-link>
          <span v-else>{{ crumb.name }}</span>
        </li>
      </ul>
    </nav>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$route.matched.map((route) => {
        return {
          name: route.name || route.path,
          path: route.path === "/" ? null : route.path,
        };
      });
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
