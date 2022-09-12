//Find the first element having a maximum frequency in a string “unacademy”

function countMaxoccur(str) {
  let max = 0;
  let maxCount = "";
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]] = 1;
    } else {
      charMap[str[i]] += 1;
    }
  }

  for (i in charMap) {
    if (charMap[i] > max) {
      max = charMap[i];
      maxCount = [i, charMap[i]];
    }
  }
  return maxCount;
}
console.log(countMaxoccur("ooojjjjjommjjjkk"));
