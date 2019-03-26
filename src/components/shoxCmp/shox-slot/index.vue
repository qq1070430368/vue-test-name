
<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>{{$route.meta.name}}</h6>
    </div>
    <h3 v-color>这里是父组件</h3>
    <child>
      <div class="tmpl table" slot="tab">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <div class="tmpl" slot="btn">
        <button class>button</button>
      </div>
    </child>
    <!-- // 作用于插槽 -->
    <div class="tmpls">
      <h3 v-color>作用于插槽</h3>
      <child-slot>
        <template slot-scope="props">
          <div class="tmpl" slot="uls">
            <ul>
              <li v-for="item in props.datas" :key="item.id">{{item}}</li>
            </ul>
          </div>
        </template>
      </child-slot>
    </div>

    <!-- // 作用于插槽 由父组件传值  复用子组件slot -->
    <!-- <div class="tmpls">
      <h3 v-color>复用子组件slot</h3>
      <child-slot-current :currentdata="currentdata">
        <template slot="uls" slot-scope="props">
          <div class="tmpl">
            {{users}}
            <ul>
              <li v-for="item in props.datas" :key="item.id">{{item}}</li>
            </ul>
          </div>
        </template>
      </child-slot-current>
    </div>-->
    <div class="t">
      <h3 v-color>复用子组件slot</h3>
      <parent-slot title="酒店列表" :list="currentList">
        <span slot-scope="props">{{props.item.name}}</span>

        <h3 slot-scope="prop">{{prop.item.name}}</h3>
      </parent-slot>
    </div>
    <div class="sts">
      <h3 v-color>星星组件slot写法</h3>
      <star @starFn="starFn">
        <template slot-scope="props">
          <i class="iconfont" :class="[props.star? 'iconstar-empty': 'iconstar-full']"></i>
        </template>
      </star>
    </div>
  </div>
</template>

<script>
import lists from "./template/dialog";
// 星星组件 使用slot解构
import star from "./shox-star/index";
export default {
  data() {
    return {
      message: "插槽",
      currentList: [
        {
          name: "华住集团",
          despriction: "酒店"
        },
        {
          name: "格林豪泰集团",
          despriction: "酒店"
        }
      ]
      // data: ['卡特', '拒', '求职']
    };
  },
  directives: {
    color: {
      inserted: function(el, no, vnode) {
        el.style.background = "#ececec";
      }
    }
  },
  components: {
    child: {
      template: `<div>
                   <h1>我是局部组件</h1>
                   <slot name="tab"></slot>
                   <slot name="btn"></slot>
                </div>`
    },
    childSlot: {
      props: {
        items: Array
      },
      template: `<div>带有数据
                    <slot  :datas="data"></slot>
                </div>`,
      data() {
        return {
          data: ["选项一", "选项二", "选项三"]
        };
      }
    },
    parentSlot: {
      template: lists.perList,
      data() {
        return {
          dialogShow: true
        };
      },
      props: {
        title: String,
        list: Array
      }
    },
    star
  },
  created() {
    console.log(this.users, "作用于查擦");
  },
  methods: {
    starFn(item) {
       console.log(item, '星星组件传值过来的');
    }
  },
  watch: {
    users(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="less" scoped>
h6 {
  font-size: 16px;
  background: sandybrown;
  padding: 15px;
  text-align: left;
}
.tmpl {
  display: grid;
  grid-template-columns: repeat(3, 6fr);
  span {
    background: darkgoldenrod;
    padding: 10px;
    margin: 10px;
    color: #fff;
  }
}
</style>


