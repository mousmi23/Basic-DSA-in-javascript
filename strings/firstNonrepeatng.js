//Find the first non repeating character”

function nonReptng(str) {
  let mp = {};

  for (let i = 0; i < str.length; i++) {
    if (!mp[str[i]]) {
      mp[str[i]] = 1;
    } else mp[str[i]] += 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (mp[str[i]] == 1) {
      return [str[i], i];
    }
  }
  return -1;
}

console.log(nonReptng("kkaai"));
