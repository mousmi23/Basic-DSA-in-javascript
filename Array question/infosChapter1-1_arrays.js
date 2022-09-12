// infosys course-ch-1
//array with fixed length

const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "satuday",
];

const weather = [30, 27, 28, 31, 32, 29, 30];

//it will iterate both array elements together.
for (let i = 0; i < weekdays.length; i++) {
  let weekday = weekdays[i];
  let temp = weather[i];
  console.log("the tem on", weekday, "was", temp);
}

//to calculate the average
let totalTemp = 0;
for (let i = 0; i < weekdays.length; i++) {
  let temp = weather[i];

  totalTemp += temp;
}
let average = totalTemp / weather.length;
console.log("the avg temp was", average);
