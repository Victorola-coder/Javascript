// there are  some cases we want to do some logic, let's say we ar to submit a form and want to check if it has a value.

const email = "example@email.com";

if (email) {
  console.log("You have entered an email address");
} else {
  console.log("email  cannot be blank");
}

// the email variable above will be coerced into a boolean as far as it is in an if/else block

// we can test by using the Boolean keyword

let test = Boolean(email);
console.log(test);

// FALSY VALUES
// - false (obviously)
// - 0 (also -0 and BigInt 0n)
// - "" (empty string)
// - null
// - undefined
// - NaN

/*
THERE ARE SOME COMMON PROBLEM WE CAN HAVE WITH SOME TRUTHY AND FALSY CONDITiONS
*/

const x = 0;
if (x) {
  console.log(`x is truthy`);
} else {
  console.log(`x is falsy`);
}

//  Truthy Values

// Everything that is not falsy will evaluate to `true`, however, Some of these may surprise you.

// - Everything else that is not falsy
// - true (obviously)
// - '0' (string with 0)
// - 'false' (string with false)
// - ' ' (space in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

// working with objects

if ({}) {
  console.log("yo");
}
