// map 함수 (메서드) vs foreach 차이
const arr = [1, 2, 3, 4, 5];

const foreachArr = arr.forEach(function (value, index, array) {
  return value * 2;
});
console.log(arr);
const mapArr = arr.map(function (value, index, array) {
  return value * 2;
});
console.log(arr);

console.log(foreachArr, "\n", mapArr);
