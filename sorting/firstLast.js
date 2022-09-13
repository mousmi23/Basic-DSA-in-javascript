// Find first and last positions of an element(target) in a sorted array

//1st approach -time complexity O(n) space complexity O(1)
let arr = [1, 1, 2, 2, 2, 4, 5];
let t = 2; //target

var searchRange = function (arr, t) {
  tStart = -1;
  tend = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      if (tStart == -1) {
        tStart = i;
        tend = i;
      } else {
        tend++;
      }
    }
  }
  return [tStart, tend];
};
console.log(searchRange(arr, t));

//2nd approach binary search -time complexity O(logn)

function searchRange(arr, t) {
  let start = 0;
  let end = arr.length - 1;
  let ans = [-1, -1];

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == t) {
      ans[0] = mid;
      end = mid - 1;
    } else if (arr[mid] < t) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  let start1 = 0;
  let end1 = arr.length - 1;

  while (start1 <= end1) {
    let mid1 = start1 + Math.floor((end1 - start1) / 2);
    if (arr[mid1] == t) {
      ans[1] = mid1;
      start1 = mid1 + 1;
    } else if (arr[mid1] < t) {
      start1 = mid1 + 1;
    } else {
      end1 = mid1 - 1;
    }
  }
  return ans;
}
console.log(searchRange(arr, t));
