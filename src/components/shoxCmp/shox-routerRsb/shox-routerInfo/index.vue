<template>
  <div class="top-fixed">
    {{$route.params.id}}
    <!-- {{title}} -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next(vm => {
      console.log(vm);
    });
    // react to route changes...
    // don't forget to call next()
  }
};
</script>
