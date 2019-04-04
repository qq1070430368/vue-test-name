const list = [{
  productName: '平板电脑IPAD-MIX',
  price: '3288',
  int: '2',
  id: '1'
},
{
  productName: 'IPHONE-MAX-IDE',
  price: '6488',
  int: '10',
  id: '2'
},
{
  productName: '小米MAX-8',
  price: '1288',
  int: '5',
  id: '3'
},
{
  productName: '华为Z986-MAX',
  price: '17288',
  int: '3',
  id: '4'
}
];
export default {
  getAllProducts() {
    const promise = new Promise((resolve, reject) => {
      if (resolve) {
        resolve(list);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('数据格式出错');
      }
    });
    return promise;
  }
};
