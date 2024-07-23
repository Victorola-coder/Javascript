// Array is a type of object in Javascript that is commonly created with  with square brackets [array literals], it can take any data type and each elements is separated with a comma, arrays can also be created with the new construct Keyword  but wrapped with a normal brackets (array object) you cn also call array DATA STRUCTURE. In many programming languages, array is zero based index, this means the first element in array is in 0 position

let output;

/*
-----------------------------
ARRAY LITERAL
------------------------------
*/
const arr = [374, 755, 398, 118, 289];

// ARRAY CONSTRUCT
const arrObj = new Array(374, 755, 398, 118, 289);

// add a new element to the end of the array
arr.push(700); // most common and precise method

/*
you can also add to the end of the element by setting the length if the element to be equal to the arr
*/
arr[arr.length] = "Hello"; // this is possible because the length of the element is always greater than the index

// add a new element to  the start of the element

arr.unshift(100);

output = arr.length; // returns the length of the array

// output = arr.reduce((arr, rec) => arr + rec); 
// LETS TALK ABOUT THIS LATER

arr.reverse(); // return the element in the array in a reversed order

console.log(arr, typeof arr);

console.log(output);

/* 
---------------------
NOTE! this code runs from the top to the bottom and most of the method and property mutate the original array.
---------------------
*/
