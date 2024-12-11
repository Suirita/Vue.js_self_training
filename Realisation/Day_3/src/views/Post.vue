<template>
  <div>
    <h1>Post {{ postId }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: null,
    };
  },
  created() {
    this.postId = this.$route.params.id;
  },
};
</script>
