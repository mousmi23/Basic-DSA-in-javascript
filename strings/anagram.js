// let str = "kolkata";
// x = str.split("").sort().join("");
// console.log(x);

//checking anagram or not . anagram means,two string having same character, same length, position can difeer
// function anagram(str1, str2) {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");
//   return str1 == str2;
// }

// let str1 = "abc";
// let str2 = "cdb";
// console.log(anagram(str1, str2));

//can we optimize the code ? time complexity O(nlogn)
function anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  //prepare frequency map
  let mp = {};
  for (let i = 0; i < str1.length; i++) {
    if (!mp[str1[i]]) {
      mp[str1[i]] = 1;
    } else {
      mp[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!mp[str2[i]]) {
      console.log("not an anagram", mp);
      return false;
    } else {
      mp[str2[i]] -= 1; //if we found the character in mp, then we reduce the frequency
      if (mp[str2[i]] == 0) delete mp[str2[i]];
    }
  }
  return Object.entries(mp).length == 0;
}
let str1 = "knee";
let str2 = "eekn";

console.log(anagram(str1, str2));
