//find the maximum and minimum number from an array

let arr1 = [6, 8, 9, 2, 5, 1, 10];
let arr = [-6, -8, -9, -2, -5, -1];

function Maxmin(arr) {
  let maxEle = arr[0];
  let smallEle = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
    if (arr[i] < smallEle) {
      smallEle = arr[i];
    }
  }
  return [smallEle, maxEle];
}
console.log(Maxmin(arr));
