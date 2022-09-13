// selection sort

// we will take the minimum index as i and check with the next elements,it is is smaller , then swap it,

//1st approach with one line swapping
function selectionSort(array) {
  const arr = array.slice(); // to prevent mutating the original array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const arr = [1, 4, 2, 8, 43, 32, 460, 1, 2, 250];
const output = selectionSort(arr);
console.log(output);
console.log(arr);

//2nd approach with inside swapping

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     const temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([1, 4, 2, 8, 43, 32, 460, 1, 2, 250]));

//3dd approach with seperate swapping function

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     swap(arr, minIndex, i);
//   }
//   return arr;
// }

// console.log(selectionSort([1, 4, 2, 8, 43, 32, 460, 1, 2, 250]));

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
