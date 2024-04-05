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

// TRUTHY & FALSY CAVEATS

const children = 0;

// if (children) {
//   console.log(`you have ${children} children`);
// } else {
//   console.log(`go and get laid fam`);
// }

if (children !== undefined) {
  console.log(`you have ${children} children`);
} else {
  console.log("Go and get laid fam");
}

// working with empty objects

const users = {};

if (Object.keys(users).length < 0) {
  console.log(`${users.name} is online`);
} else {
  console.log("No user is Online");
}

// since an empty object will return "true" we can use the javascript method to convert to array and then check the length

// working with arrays

const arr = [];

if (arr) {
  console.log(
    "love is a higher revelation than all the wisdom and philosophy. "
  );
} else {
  console.log("");
}
