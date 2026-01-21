// Challenge 1:
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
// arr.push(6);
arr[arr.length] = 6;
arr.reverse();
console.log(arr);

// Challenge 2:
// Combine arr1 and arr2 into a new array called arr3 with the following elements:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();
// console.log(arr1);

const arr3 = Array.of(arr1, arr2).flat();
console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
