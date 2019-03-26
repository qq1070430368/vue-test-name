<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>动态组件渲染 key : keepAlive属性</h6>
    </div>

    <div class="flex-col btn-gr">
          <span @click="slide">参照keep-alive</span>
      <span @click="slide1">keep-alive</span>
  
    </div>

    <mt-tab-container v-model="active" :swipeable="true">
      <mt-tab-container-item id="tab-container1">
        <div class="tab-components">
          <div class="flex-col">
            <span
              v-for="item in tabs"
              :key="item.type"
              v-bind:class="['tab-button', { active: currentTab === item.type }]"
              @click="currentTab=item.type"
            >{{item.name}}</span>
          </div>
          <keep-alive>
            <tabs
              :is="'tab-uzi'"
              :contentList="contentSomeList"
              :currentTab="currentTab"
              v-if="currentTab"
              :keepAlive="true"
            ></tabs>
          </keep-alive>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <!-- <transition name="fade" mode="out-in" appear> -->
        <div class="tab-components">
          <div class="flex-col">
            <span
              v-for="item in tabs"
              :key="item.type"
              v-bind:class="['tab-button', { active: currentTab === item.type }]"
              @click="currentTab=item.type"
            >{{item.name}}</span>
          </div>
          <keep-alive>
            <tabs :is="currentabName" :contentArrList="contentList" :keepAlive="false"></tabs>
          </keep-alive>
        </div>

        <!-- </transition>- -->
        <!-- // 引用 同一个组件tab-uzi -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import tabUzi from "./tabUzi.vue";
import { TabContainer, TabContainerItem } from "mint-ui";
export default {
  data() {
    return {
      currentTab: "UZI",
      active: "tab-container1",
      tabs: [
        {
          name: "RNG",
          type: "UZI"
        },
        {
          name: "IG",
          type: "THESHEY"
        }
      ],
      contentSomeList: {
        UZI: [
          {
            id: 1,
            title: "队史",
            content: `<p>2012年2012年5月，皇族电子竞技俱乐部成立。 [5] 皇族英雄联盟分部在2012年11月的TGA大奖赛冬季总决赛取得亚军 接下来在GUNNAR杯英雄联盟邀请赛上皇族战胜了OMG战队取得冠军。 [7] 
                   2013年皇族英雄联盟分部在英伟达游戏群英汇上取得亚军。 [8] 在全国电子竞技赛取得季军。 [9] 在全球总决赛上，在决赛上败于SKT战队，取得亚军。 [10] 
                   2014年皇族英雄联盟分部在2014年英雄联盟职业联赛春季赛上积分不足，止步小组赛，皇族英雄联盟分部在夏季赛签下2名韩援选手，成功晋级季后赛，在季后赛上以2：3败于OMG战队止步八强。在全球总决赛上战胜了EDG战队、OMG战队晋级决赛，最终在决赛上以1：3败于SSW战队取得亚军。 [11] 
                   2015年在2015年英雄联盟职业联赛春季赛上以积分不足，在保级赛败于GT战队保级失败，降级至英雄联盟甲级职业联赛。 [12] 
                   俱乐部通过与VG、KING和GT电子竞技俱乐部的四方交易，获得了VG电子竞技俱乐部二队VG.P战队的LPL名额和部分KING、GT战队的选手后用VG.P战队的LPL名额正式更名RNG战队。</p>`
          },
          {
            id: 2,
            title: "成员",
            content:
              "<p>UIZ</p><p>小虎</p><p>小明</p><p>卡莎</p><p>姿态</p><p>麻辣香锅</p>"
          },
          {
            id: 3,
            title: "历史奖项",
            content:
              "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
          }
        ],
        THESHEY: [
          {
            id: 1,
            title: "队史",
            content: `<p>2012年2012年5月，IG电子竞技俱乐部成立。 [5] 皇族英雄联盟分部在2012年11月的TGA大奖赛冬季总决赛取得亚军 接下来在GUNNAR杯英雄联盟邀请赛上皇族战胜了OMG战队取得冠军。 [7] 
                   2013年皇族英雄联盟分部在英伟达游戏群英汇上取得亚军。 [8] 在全国电子竞技赛取得季军。 [9] 在全球总决赛上，在决赛上败于SKT战队，取得亚军。 [10] 
                   2014年皇族英雄联盟分部在2014年英雄联盟职业联赛春季赛上积分不足，止步小组赛，皇族英雄联盟分部在夏季赛签下2名韩援选手，成功晋级季后赛，在季后赛上以2：3败于OMG战队止步八强。在全球总决赛上战胜了EDG战队、OMG战队晋级决赛，最终在决赛上以1：3败于SSW战队取得亚军。 [11] 
                   2015年在2015年英雄联盟职业联赛春季赛上以积分不足，在保级赛败于GT战队保级失败，降级至英雄联盟甲级职业联赛。 [12] 
                   俱乐部通过与VG、KING和GT电子竞技俱乐部的四方交易，获得了VG电子竞技俱乐部二队VG.P战队的LPL名额和部分KING、GT战队的选手后用VG.P战队的LPL名额正式更名RNG战队。</p>`
          },
          {
            id: 2,
            title: "成员",
            content:
              "<p>THESHEY</p><p>ROOKIE</p><p>CLEARLOVE</p><p>XIAOMING</p><p>宁王</p>"
          },
          {
            id: 3,
            title: "历史奖项",
            content: "<p>S8世界总决赛冠军队伍</p>"
          }
        ]
      },
      contentList: [
        {
          id: 1,
          title: "队史",
          content: `<p>2012年2012年5月，皇族电子竞技俱乐部成立。 [5] 皇族英雄联盟分部在2012年11月的TGA大奖赛冬季总决赛取得亚军 接下来在GUNNAR杯英雄联盟邀请赛上皇族战胜了OMG战队取得冠军。 [7] 
                   2013年皇族英雄联盟分部在英伟达游戏群英汇上取得亚军。 [8] 在全国电子竞技赛取得季军。 [9] 在全球总决赛上，在决赛上败于SKT战队，取得亚军。 [10] 
                   2014年皇族英雄联盟分部在2014年英雄联盟职业联赛春季赛上积分不足，止步小组赛，皇族英雄联盟分部在夏季赛签下2名韩援选手，成功晋级季后赛，在季后赛上以2：3败于OMG战队止步八强。在全球总决赛上战胜了EDG战队、OMG战队晋级决赛，最终在决赛上以1：3败于SSW战队取得亚军。 [11] 
                   2015年在2015年英雄联盟职业联赛春季赛上以积分不足，在保级赛败于GT战队保级失败，降级至英雄联盟甲级职业联赛。 [12] 
                   俱乐部通过与VG、KING和GT电子竞技俱乐部的四方交易，获得了VG电子竞技俱乐部二队VG.P战队的LPL名额和部分KING、GT战队的选手后用VG.P战队的LPL名额正式更名RNG战队。</p>`
        },
        {
          id: 2,
          title: "成员",
          content:
            "<p>UIZ</p><p>小虎</p><p>小明</p><p>卡莎</p><p>姿态</p><p>麻辣香锅</p>"
        },
        {
          id: 3,
          title: "历史奖项",
          content:
            "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
        }
      ]
    };
  },
  computed: {
    currentabName: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  components: {
    tabUzi,
    tabTheshey: {
      template: "<div>我是IG的组件</div>"
    }
  },
  methods: {
    slide() {
      this.active = "tab-container1";
    },
    slide1() {
      this.active = "tab-container2";
    }
  }
};
</script>
<style lang="less" scoped>
.btn-gr {
  justify-content: space-around;
  padding: 15px;
  border-bottom: 2px dashed darkgoldenrod;
  span {
    padding: 5px 30px;
    color: #fff;
    &:nth-child(1) {
      background: darkgoldenrod;
    }
    &:nth-child(2) {
      background: seagreen;
    }
  }
}
.tab-components {
  padding: 20px 20px 20px 20px;
  .tab-button {
    padding: 6px 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
    // &:hover {
    //   background: darkkhaki;
    // }
    &.active {
      background: darkkhaki;
    }
  }
}
</style>
