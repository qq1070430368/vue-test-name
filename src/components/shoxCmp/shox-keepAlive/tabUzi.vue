<template>
  <div class="tab-wrap">
    <div class="tab-posts flex-col" v-if="keepAlive">
      <ul class="flex-cum wrap-ul" >
        <li
          class="wrap-item"
          v-for="(item, index) in filterlist"
          :key="index"
          @click="tabFilterList(item, index)"
        >
          <span :class="{active: data === item}">{{item.title}}</span>
        </li>
      </ul>
      <div class="wrap-right">
        <div class="wrap-right-title" v-show="data">
          <h5>{{data.title}} ({{currentTab}})</h5>
          <div v-html="data.content"></div>
        </div>

        <!-- <div class="wrap-right-title" v-else>
          <h5>即将为您介绍{{currentTab}}战队</h5>
        </div>-->
      </div>
    </div>

     <div class="tab-posts flex-col" v-else>
      <ul class="flex-cum wrap-ul" >
        <li
          class="wrap-item"
          v-for="(item, index) in contentArrList"
          :key="index"
          @click="seletedComponts = item"
        >
          <span :class="{active: seletedComponts === item}">{{item.title}}</span>
        </li>
      </ul>
      <div class="wrap-right">
        <div class="wrap-right-title" v-if="seletedComponts">
          <h5>{{seletedComponts.title}} ({{currentTab}})</h5>
          <div v-html="seletedComponts.content"></div>
        </div>

        <div class="wrap-right-title" v-else>
          <h5>即将为您介绍{{currentTab}}战队</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      seletedComponts: null,
      tabType: {
        UZI: {
          $index: 0
        },
        THESHEY: {
          $index: 0
        }
      }
    };
  },
  props: {
    contentList: Object,
    currentTab: String,
    contentArrList: Array,
    keepAlive: Boolean
  },
  computed: {
    filterlist() {
      try {
        return this.contentList[this.currentTab];
      } catch (err) {
        console.log(err);
      }
    },
    // seletedComponts: {
    //    get: function() {
    //     return 
    //   },
    //   set(va) {
    //     if(!va) {
    //       return
    //     }
    //     this.seletedComponts = va;
    //   }
    //   return this.contentArrList[this.tabIndex];
    // },
    data: {
      get: function() {
        return this.contentList[this.currentTab][
          this.tabType[this.currentTab].$index
        ];
      },
      set(va) {
        if(!va) {
          return
        }
        this.data = va;
      }
    }
  },
  methods: {
    tabFilterList(item, index) {
      this.tabType[this.currentTab].$index = index;
      
    }
  }
};
</script>
<style lang="less" scoped>
.tab-wrap {
  box-shadow: 0 0 10px #333333;
  background: cornsilk;
  .tab-posts {
    text-align: left;
    margin-top: 2px;
    padding: 10px;
    line-height: 40px;
    ul {
      margin: 0;
      position: relative;
      padding-right: 15px;
      overflow: hidden;
      flex-basis: 140px;
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 130px;
        background: #ccc;
        right: 0;
        top: 23px;
      }
      li {
        padding-bottom: 20px;
        span {
          padding-bottom: 10px;
        }
        .active {
          border-bottom: 3px solid darkcyan;
        }
      }
    }
  }
  .wrap-right {
    padding: 0 10px;
    flex-basis: calc(100% - 140px);
  }
}
</style>
