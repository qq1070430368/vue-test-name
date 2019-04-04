<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>{{$route.meta.name}}</h6>
    </div>
    <div class="tab-container">
      <list-shop></list-shop>
    </div>
  </div>
</template>
<script>
import listShop from "./template/list";
export default {
  data() {
    return {};
  },
  components: {
    listShop
  }
};
</script>
<style lang="less" scoped>
</style>
