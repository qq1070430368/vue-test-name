<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>动态组件渲染 key : is属性</h6>
    </div>

    <div class="tab-container">
      <tab-current :tabList="tabList">
        <template slot-scope="props">
          <div class="tab-con-item">{{cardList[props.type.$index].name}}</div>
        </template>
      </tab-current>
    </div>

    <!-- <div class="cmp-title">
       <h6>动态组件渲染 key : keep-alive属性</h6>
    </div> -->
  </div>
</template>
<script>
import tabCurrent from "./tab-current.vue";
export default {
  data() {
    return {
      initData: "",
      seletedType: "JS",
      tabList: [
        {
          name: "前端",
          type: "JS"
        },
        {
          name: "UI",
          type: "AI"
        },
        {
          name: "后台",
          type: "JAVA"
        }
      ],
      cardList: [
        {
          name: "html,javascript,css",
          type: "JS"
        },
        {
          name: "PS,AI,CC,设计",
          type: "AI"
        },
        {
          name: "JAVA,SRPINGBOT,MSQ",
          type: "JAVA"
        }
      ]
    };
  },
  components: {
    tabCurrent
  }
};
</script>
<style lang="less" scoped>
</style>


