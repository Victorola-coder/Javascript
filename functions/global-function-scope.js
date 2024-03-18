/*
 * SCOPE is an important concept, not only in JavaScript, but in many other programming languages.
 * Scope is the current area or context of a specific piece of code. There are certain rules for what is accessible in specific scopes
 *
 * Global scoped variables are those that can be accessed anywhere in the file, its exposed.
 * Function scoped variables are only available and accessed in the code block its been defined. This can also be called a
 * local variable because its not accessed outside the function, or if/else state statement, conditional statements, etc.
 * LET and CONST define local/global variables depending on the scoped its being used, but VAR define a global variable, this is why its not a good practice
 * to use VAR to define variables apart from being able to be redefined and reassigned, very crazy stuffs!
 * If we are NOT inside of a function or any kind of block, such as an if statement or a loop, then we are in the `global scope`.
 */

// WINDOW GLOBAL OBJECT - the browser creates a global object called `window`. This object has a ton of methods and properties

// window.alert("Hello World") // alert is directly on the window object but we don't need to necessarily add window every time

// alert("Hello World"); // will still work as above

// Global Variable

const x = 100;

// this variable can be accessed anywhere in the File, its global scoped variable

function Logx(num) {
  return x + num;
}

console.log(Logx(100)); // 200 => x + 100 = 100 + 100 -- bts

// either way if i define a variable with const in the function, its only scoped to that function
/*
if I create a variable called `x` in the function, 
it will overwrite the global variable and I can no longer access it. This is called **variable shadowing**.
*/

function test() {
  // i can define the  variable as param too, x = 100
  const x = 100;
  console.log(x);
}

test();
