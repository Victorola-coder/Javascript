// immediately invoked function expression(IIFE) used to prevent global Scope pollution

/*
 lets say i define a variable here named user and redeclare the same variable in another js file (e.g) "other.js" 

 and its linked to same html file, the code will break and say user its already defined, to prevent this, we use iife

 */

const user = "John";
console.log(user);

(() => {
  console.log("yo, IIFE in an arrow function");
})();

(function () {
  console.log(
    "mostly, its an anonymous function, the second () is to call the function"
  );
})(); // call

// iife with params

(function (name) {
  console.log(`Hello ${name}, from params iife`);
})("Tolu");

//recursion - calling a function inside the function
(function hello() {
  console.log("Hello from the IIFE!");

  // hello(); // Causes infinite loop
})();
