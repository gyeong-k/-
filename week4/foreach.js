/* 
배열 
*/

const arr = [1, 2, 3, 4, 5];

//콜백함수가 하는 일 :
arr.forEach(function (value, index, array) {
  //console.log(value, index, array);
});

//map이랑
let map = new Map();
map.set(7, "seven");
map.set(9, "nine");
map.set(8, "eight");

map.forEach((value, index, array) => {
  console.log(value, index, array);
});
