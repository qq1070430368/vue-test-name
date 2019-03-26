<template>
  <div class="vue-dropdown default-theme">
    <div
      class="search-module clearfix"
      v-show="itemlist.length"
    >
      <input
        class="search-text"
        @keyup='search($event)'
        placeholder="选择"
        v-model="seleteds"
        @focus="handleinput()"
        @blur="focusState = false"
      />
      <span class="glyphicon glyphicon-search search-icon"></span>
    </div>
    <ul
      class="list-module"
      v-if="focusState"
    >
      <li
        v-for="(item,index) in itemlist"
        @click="appClick(item)"
        :key="index"
      >
        <span class="list-item-text">{{item.name}}</span>
      </li>
    </ul>

  </div>

</template>
<script>
export default {
  data() {
    return {
      show: true,
      datalist: [],
      seleteds: '',
      focusState: false,
      nextTicks: '123'
    };
  },
  props: {
    itemlist: Array
  },
   directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function (el, value) {    //第二个参数传进来的是个json
        if (value) {
          el.focus();
        
          this.focusState = true;
        }
      }
    }
  },
  // watch: {
  //   itemlist: function(val) {
  //     debugger
  //     this.datalist = val.concat();
  //   }
  // },
  methods: {
    appClick: function(data) {
      this.$emit("showCityName", data);
      this.seleteds = data.name;
    },
    handleinput: function() {
      this.focusState = true;
    },
    search: function(e) {
      let vm = this,
        searchvalue = e.currentTarget.value;
      vm.datalist = vm.itemlist.filter(function(item, index, arr) {
        return item.name.indexOf(searchvalue) != -1;
      });
    }
  },
  computed: {
    // length: function() {
    //   return this.datalist.length;
    // }
  }
};
</script>

<style lang="less" scoped>
.vue-dropdown.default-theme {
  // position: absolute;

  left: 15%;
  width: 70%;
  // margin: 0 auto;
  margin-top: 1em;
  padding: 1em;
  z-index: 10;
  box-shadow: 0px 0px 10px #ccc;
  margin: 50px auto;
  &._self-show {
    display: block !important;
  }

  .search-module {
    position: relative;
    .search-text {
      width: 100%;
      height: 30px;
      padding-right: 2em;
      padding-left: 0.5em;
      border-radius: 0.5em;
      box-shadow: none;
      border: 1px solid #ccc;

      &:focus {
        border-color: #2198f2;
      }
    }

    .search-icon {
      position: absolute;
      top: 24%;
      right: 0.5em;
      color: #aaa;
    }
  }

  .list-module {
    max-height: 200px;
    overflow-y: auto;
    li {
      &._self-hide {
        display: none;
      }
      margin-top: 0.5em;
      padding: 0.5em;
      &:hover {
        cursor: pointer;
        color: #fff;
        background: #00a0e9;
      }
    }
  }
}
.tip__nodata {
  font-size: 12px;
  margin-top: 1em;
}
</style>

