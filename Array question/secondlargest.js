let arr1 = [6, 8, 9, 2, 5, 1, 10];
let arr = [-6, -8, -9, -2, -5, -1];

function secondMax(arr) {
  let maxEle = -Infinity;
  let secondmax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxEle) {
      secondmax = maxEle;
      maxEle = arr[i];
    }
  }
  return [secondmax];
}
console.log(secondMax(arr));

function secondmin(arr) {
  let minEle = +Infinity;
  let secondmin = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minEle) {
      secondmin = minEle;
      minEle = arr[i];
    }
  }
  return [secondmin];
}
console.log(secondmin(arr));
