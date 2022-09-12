function firstUpper(str) {
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      str = str[0].toUpperCase() + str.slice(1);
    }
    if (str[i] === " ") {
      str = str.slice(0, i) + " " + str[i + 1].toUpperCase() + str.slice(i + 2);
    }
  }
  return str;
}
console.log(firstUpper("the quick brown fox"));
