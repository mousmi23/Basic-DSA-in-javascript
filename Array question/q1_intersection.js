// Find the intersection in the array, i.e. elements which are common/present in both the arrays

const arr1 = [3, 2, 3, 4, 4, 5, 5, 5, 8];
const arr2 = [3, 4, 5, 6, 7];

const intersec = arr1.filter((currElm) => {
  return arr2.includes(currElm);
});
console.log(intersec);
