// bubble sort

function sort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
// var numbers = [0, 1, 0, 2, 0, 1, 0, 1, 1, 2];
sort(numbers);
console.log(numbers);
