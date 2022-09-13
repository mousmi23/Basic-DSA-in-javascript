// sort in ascending order without using inbuilt function

arr = [3, 4, 5, 1, 9, 6];

function isSorted(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

while (!isSorted(arr)) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
console.log(arr);
