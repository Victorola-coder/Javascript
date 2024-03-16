/*
 ----------------------------------------------------------------------------------------------------------------------------------------------
*Functions is just some kind of way of writing some groups of code that can be run all once together and can be reused, you declare a function with the 
*"function" keyword and then a "name" or "identifier" follow, a "bracket" and "curly braces/brackets" - function functionName (){} - you just initialized a function and also, function is a reserved keyword in JS!
 ----------------------------------------------------------------------------------------------------------------------------------------------
*/

// FUNCTIONS - Parameter and arguments

function sayHello(name = "bot") {
  // here "name" is a parameter to the "sayHello" function, bot is just like a default argument to the name variable if nothing is passed during run time

  return `${name} says Hi👋`; // "return" keyword is used to actually return something from a function and also used to exit the function cos any code after ot is unreachable

  console.log(); // this code is not reachable
}

// console.log(sayHello("Victor")); // "Victor" is an argument to the function "sayHello" and its been passed when the function is called

// declaring and initializing a function / calling

function add(x, y) {
  // declared "add"
  //   console.log(x + y);
}

// calling the function we use the  functionName and  "()"
add(2, 2);

// REST PARAMETER

// function sum(...num) {
//   return num;
// }

// console.log(sum(1, 2, 3, 4, 5)); // here we are using the "rest parameter" to pass any number of arguments to the function

function totalNumber(...numbers) {
  return numbers.reduce((a, b) => a + b); // here we are using the "reduce" method to sum all the numbers in the array
}

// console.log(totalNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// this code does the same as the above code but using a "for loop" method to sum all the numbers in the array
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total; // here we are using the "for loop" method to sum all the numbers in the array
}

// console.log(sum(1, 2, 3, 4, 5));

//OBJECT AS PARAMS

function userDetails(user) {
  return `${user.username} is ${user.age} years old and he is active from ${user.country} with ${user.followCount} followers`;
}

const user = {
  username: "VickyJay",
  age: 17,
  country: "NG💚",
  followCount: Math.floor(Math.random() * 999 + 1),
};

console.log(userDetails(user));
