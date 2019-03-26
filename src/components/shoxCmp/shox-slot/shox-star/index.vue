<template>
  <div class="star-flex">
    <h4>评价组件</h4>
    <ul>
      <li v-for="(item, index) in stars" :key="index" @click="changeStar(item, index)">
        <!-- <i class="iconfont" :class="{'iconstar-full': item.state}"></i> -->
        <slot :star="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'star',
  data() {
    return {
      rating: 1
    };
  },
  methods: {
    changeStar: function (item, $index) {
      this.rating = $index + 1;
      this.$emit('starFn', this.rating);
    }
  },
  computed: {
    stars() {
      return [1, 2, 3, 4, 5].map(value => this.rating < value);
    }
  }
};
</script>
<style lang="less" scoped>
.flex-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.star-flex {
  &:extend(.flex-wrap);
  h4 {
    margin: 0;
  }
  ul {
    &:extend(.flex-wrap);
    margin-bottom: 0;
    li {
      margin-left: 18px;
      i {
        color: darkorange;
        font-size: 22px;
      }
      .iconstar-empty{
        color: black
      }
    }
  }
}
</style>

