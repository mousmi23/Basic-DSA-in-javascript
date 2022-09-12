//Q:3. Write a JavaScript function that generates all combinations of a string.
/*
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/
function allCom(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      newStr += str.slice(i, j + 1) + ",";
    }
  }
  return newStr;
}
console.log(allCom("dog"));
