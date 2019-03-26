<template>
  <div class="tab-cmp">
    <div class="tab-ul">
      <div class="tab-header">
        <div class="tab-item flex-col">
          <span
            :class="{'tab-active-line': item.type === seletedType.type}"
            v-for="(item, index) in tabList"
            :key="item.type"
            @click="tabFilter(item, index)"
          >{{item.name}}</span>
        </div>
      </div>
      <div class="tab-con">
        <slot :type="seletedType"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seletedType: {
        type: "JS",
        $index: 0
      }
     
    };
  },
  props: {
    tabList: Array,
    // cardList: Array
  },
 
  methods: {
    tabFilter(item, $index) {
      this.seletedType.type = item.type;
      this.seletedType.$index = $index;
      this.$emit("seletedFun", item);
    }
  }
};
</script>
<style lang="less" scoped>
.tab-cmp {
  .tab-item {
    align-items: center;
    justify-content: space-around;
    span {
      display: inline-block;
      background: #eee;
      color: darkgoldenrod;
      padding: 10px;
      width: 33.3%;
      position: relative;
    }
    .tab-active-line {
      &::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 3px;
        left: 50px;
        top: 36px;
        background: darkcyan;
      }
    }
  }
  .tab-con {
    .tab-con-item {
      background: darkkhaki;
      color: #fff;
      height: 300px;
      line-height: 300px;
    }
  }
}
</style>

