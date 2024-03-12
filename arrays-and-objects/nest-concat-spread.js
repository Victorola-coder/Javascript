let x;

/* 
==========================
NESTING, CONCAT, SPREADING - arrays of objects
==========================
*/

const legs = ["tits", "ussy", "boobs", "clit"];

x = ["cum", ...legs]; // spread legs

const fruits = ["apple", "grape", "banana", "orange"];

const os = ["windows", "mac", "linux", "ubuntu"];

// we can use the normal concat method to bring in an array into another
const concat = fruits.concat(os); // does same thing the spread operator will do below, just spread operators seems neater and modern

// console.log(concat);

const arrGroup = [...fruits, ...os, ...x]; // bringing all the array into one single array

// x = arrGroup;

const arr = [1, 2, 3, [4, 5], [6, 7], 8, 9];

// console.log(arr) // check the array stuffs, its just a nested array

x = arr.flat(); // returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

x = arr.includes(9); // Determines whether an array includes a certain element, returning true or false as appropriate.

/*
--------------------------------
 STATIC ARRAY OF OBJECT METHODS
-------------------------------
*/

x = Array.isArray(arr); //  check if the inputted value is an array or not, returns true or false as appropriate - true
x = Array.isArray("tolu"); // false

/*
Creates an array from an array-like object.
@param arrayLike — An array-like object to convert to an array.
*/
x = Array.from("123456"); //An iterable object to convert to an array. Creates an array from an iterable object.

// lets create array from 3-4 variables

let a = 2,
  b = 4,
  c = 3,
  d = 1;
// Returns a new array from a set of elements.
x = Array.of(a, b, c, d);

// pretty much for  now

console.log(x);
