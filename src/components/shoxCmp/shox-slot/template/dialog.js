// 列表公用模板
const perList = `
<div class="list-box">
   <h1>{{title}}</h1>
 <ul>
  <li v-for="(item, index) in list" :key="index">
    <slot :item="item"></slot>
  </li>
 </ul>
</div>
`;

module.exports = {
  perList
};
