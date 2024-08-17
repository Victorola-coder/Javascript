// CHALLENGE 1 - SOLUTION
// expectation => [6, 5, 4, 3, 2, 1, 0];

const arr = [1, 2, 3, 4, 5];

let x;

// x = arr.push(6);

x = arr.reverse().unshift(6);

arr.push(0);

console.log(arr);

// CHALLENGE 2 Expectation ==>  [1,2,3,4,5,6,7,8,9,10, 11]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10, 11];

// SOLUTION 1
const arr3 = arr1.slice(0, 4).concat(arr2); // if we used splice here it will work but also mutate the initial array

// SOLUTION 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr3, arr4);

// TESTS

function validate() {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

  return re.test();
}

console.log(validate()); //false

console.log(NaN === NaN); // false
/*
 *in JavaScript compare values by checking for strict equality.
 *NaN is considered unique in that it doesn't equal any other value, including itself.
 */

//  ARITHMETIC SHITS - saw some images on twitter and tried to run it on my console and im very surprised the way JavaScript always work

console.log("2" + "2" + "0");

let booleanTest = "22" + "3";

let result = Boolean(booleanTest);

console.log(result, booleanTest);
