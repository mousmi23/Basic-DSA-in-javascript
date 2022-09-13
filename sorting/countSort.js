function countsortStable(arr) {
  let maxElement = Math.max(...arr);
  let freq = Array(maxElement + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }
  for (let i = 1; i < freq.length; i++) {
    freq[i] = freq[i] + freq[i - 1];
  }

  let output = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let currelement = arr[i];
    let index = freq[currelement];
    output[index - 1] = currelement;
    freq[currelement];
  }
  return output;
}

console.log(countsortStable(1, 2, 1, 6, 6, 1, 9));
