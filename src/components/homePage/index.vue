<template>
  <div class="show_17_homePage top-fixed">
    <div class>
      <div class="home-page-grid">
        <div class="show_17_homepage_swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in homePageImgList" :key="item.id">
              <img class="img-responsive" :src="item.imgUrl" v-if="item.imgUrl" alt>
            </mt-swipe-item>
          </mt-swipe>
        </div>

        <div class="show_17_grid_list">
          <div class="show_17_grid_con">
            <div class="show_17_grid_wrap">
              <router-link :to="{name: 'seletedOptions', path: '/seletedOptions'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>下拉组件</span>
                </div>
              </router-link>
              <router-link :to="{name: 'routerRsb', path: '/routerRsb'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>响应式路由</span>
                </div>
              </router-link>
              <router-link :to="{name: 'flexTest', path: '/flexIndex'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>弹性布局</span>
                </div>
              </router-link>
              <router-link :to="{name: 'slot', path: '/slot'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>slot插槽</span>
                </div>
              </router-link>
              <router-link :to="{name: 'tabs', path: '/tabs'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>TAb切换IS</span>
                </div>
              </router-link>
              <router-link :to="{name: 'keepAlive', path: '/keepAlive'}">
                <div class="grid_flex">
                  <i class="iconfont iconziyuan"></i>
                  <span>kee-alive</span>
                </div>
              </router-link>
              <div class="grid_flex">
                <i class="iconfont iconziyuan"></i>
                <span>我的经历</span>
              </div>
              <div class="grid_flex">
                <i class="iconfont iconziyuan"></i>
                <span>我的经历</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <ul>
          <li
            v-for="item in homePage"
            :key="item.id"
          >
            <router-link :to="{path:'/home',  name: `home_detail`, query: {id: item.id}}">
              <span>{{item.name}}</span>
            </router-link>
          </li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "homePage",
  data() {
    return {
      homePageImgList: [],
      active: "tab-container1",
      selected: ""
    };
  },
  created() {
    this.getImgList();
  },
  watch: {
    selected: function(val) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "MainPage":
          this.$router.push("/mainpage");
          break;
        case "ShoppingList":
          this.$router.push("/shoppinglist");
          break;
        case "GroupList":
          this.$router.push("/grouplist");
          break;
        case "UserCenter":
          this.$router.push("/usercenter");
          break;
      }
    }
  },

  methods: {
    getImgList() {
      this.$http
        .post("http://127.0.0.1:3000/usersImg", {
          loginType: "img"
        })
        .then(response => {
          if (response.status === 200) {
            this.homePageImgList = response.data;
          }
        })
        .catch(function(error) {
          console.log(error, "error");
        });
    }
  }
};
</script>

<style lang="less" scope>
.show_17_homePage {
  width: 100%;
  .show_17_homepage_swiper {
    height: 200px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .show_17_grid_con {
    .show_17_grid_wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      // grid-template-rows: 80px 80px 80px 80px;
      grid-column-gap: 5px;
      grid-row-gap: 10px;
      .grid_flex {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        &:hover {
          cursor: pointer;
        }
        i {
          font-size: 45px;
          color: red;
          margin-bottom: -5px;
        }
        span {
          display: block;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
