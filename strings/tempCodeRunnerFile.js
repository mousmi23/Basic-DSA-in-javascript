function check(str) {
  let newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join(" ");
}

console.log(check(str));