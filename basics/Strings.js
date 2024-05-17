// Working with string data types

let string = "Hello World"; // bts - string is a primitive data type and we are able to use  methods and property on it which is common ony to reference data type

string = new String("Hello World"); // this is what really happens, javascript creates an object around the variable so we can use methods and props

let output = string.toUpperCase(); // HELLO WORLD

output = string.charAt(0);

output = string[1];

output = string.length; // returns the length of the data in stored in the variable

output = string.indexOf("H"); // returns the position of the character, if the character its not in the data will return "-1"

output = string.replace("Hello", "Fuck");

output = string.substring(0, 5);

output = string.slice(0, 5);

let toTrim = "                  Trim me!";

output = toTrim.trim(); // remove whitespace

output = string.split(""); // change string to array

// output = string.__proto__;

console.log(output);
