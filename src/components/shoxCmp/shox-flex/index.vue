<template>
  <div class="top-fixed">
    <!-- // 网格布局 -->
    <div class='grid-wrap'>
      <div class='wrap-item'>1/2</div>
      <div class='wrap-item'>1/2</div>
      <div class='wrap-item'>1/2</div>
    </div>
    <div class="grid-wrap">
      <div class='left'>左边固定宽度</div>
      <div class='center'>中间自适应</div>
      <div class='right'>右边固定宽度</div>
    </div>

    <div class="grid-wrap">
      <div class='left-1'>左边固定宽度</div>
      <div class='right-1'>右边自适应</div>
    </div>

    <div class="wrap-flex">
      <h6>标题</h6>
      <div class="container-flex">
        <div class="left">左侧</div>
        <div class="main">主要内容</div>
        <div class="right">右侧</div>
      </div>
      <h6>页脚</h6>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.grid-wrap {
  display: flex;
  padding: 10px;
  .wrap-item {
    flex: 1;
    background: red;
  }
  .left {
    width: 150px;
    height: 200px;
    background: saddlebrown;
  }
  .center {
    flex-flow: 1;
    background: seagreen;
  }
  .right {
    width: 150px;
    height: 200px;
    background: sandybrown;
  }
  .left-1 {
    background: aqua;
    flex-basis: 120px;
  }
  .right-1 {
    background: red;
    flex-basis: calc(100% - 120px);
  }
}

.wrap-flex {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .container-flex{
    display: flex;
    flex: 1;
  }
  .left {
     flex-basis:50px;
    height: 200px;
    background: saddlebrown;
  }
  .main {
    flex-basis:calc(100% - 100px);
    background: seagreen;
  }
  .right {
    flex-basis:50px;
    height: 200px;
    background: sandybrown;
  }
  h6 {
    background: olivedrab;
    flex: 1;
    margin: 0;
  }
}
</style>

