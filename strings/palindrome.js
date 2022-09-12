// check letter is palindrome or not
// let str = "madam";

// const rev = (string) => {
//   const isPalindrome = str.split("").reverse().join("");

//   return isPalindrome == string ? "palindrome" : "not palindrome";
//   //   console.log(string == isPalindrome);
// };
// console.log(rev("mad"));

function check(str) {
  let newStr = "";
  for (let character of str) {
    newStr = character + newStr; //  storing reverse value, coz instead of newStr+character , we are doing chracter+newStr
  }
  return newStr === str;
}
console.log(check("mad"));
