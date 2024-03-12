// CHALLENGE 1 - SOLUTION
// expectation => [6, 5, 4, 3, 2, 1, 0];

const arr = [1, 2, 3, 4, 5];

let x;

// x = arr.push(6);

x = arr.reverse().unshift(6);

arr.push(0);

console.log(arr);

// CHALLENGE 2 Expectation ==>  [1,2,3,4,5,6,7,8,9,10]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// SOLUTION 1
const arr3 = arr1.splice(0, 4).concat(arr2);

// SOLUTION 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr3, arr4);
