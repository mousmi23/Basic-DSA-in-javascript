//Max difference between element is--

let weather = [34, 35, 38, 49, 56];
let maxDelta = weather[1] - weather[0];

for (let i = 0; i < weather.length - 1; i++) {
  let temp1 = weather[i];
  let temp2 = weather[i + 1];
  let temp = temp2 - temp1;
  console.log(temp1, temp2, "diff ", "is", temp);
  if (temp > maxDelta) {
    maxDelta = temp;
  }
}

console.log("max diff is", maxDelta);
