let str = "kol";

function check(str) {
  let newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join(" ");
}

console.log(check(str));

//2nd method by creating an empty string, and when storing, storing it into reverse order

// function check(str) {
//   let newStr = "";
//   for (let character of str) {
//     newStr = character + newStr; //  storing reverse value, coz instead of newStr+character , we are doing chracter+newStr
//   }
//   return newStr;
// }
// console.log(check(str));

// 3rd method convert it into array by splitting, then use reverse then if convert it into string

// const revStr = (str) => {
//   const str1 = str.split(""); //storing it into str1 array.
//   return str1.reverse().join(" ");
// };
// console.log(revStr("kol"));
