const longestSubarray = (nums, limit) => {
  let ret = 0;
  for (
    let left = 0, right = 0, cur = 0, min = nums[0], max = nums[0];
    right < nums.length;
    ++right
  ) {
    while (nums[right] - min > limit || max - nums[right] > limit) {
      if (nums[left] === min || nums[left] === max) {
        min = 10 ** 9;
        max = 0;
        for (let i = left + 1; i <= right; ++i) {
          nums[i] < min && (min = nums[i]);
          nums[i] > max && (max = nums[i]);
        }
      }
      --cur;
      ++left;
    }
    nums[right] < min && (min = nums[right]);
    nums[right] > max && (max = nums[right]);
    ++cur > ret && (ret = cur);
  }
  return ret;
};

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
