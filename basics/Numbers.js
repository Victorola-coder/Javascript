// WORKING WITH NUMBERS

let num = new Number(7000); // let num = 7000

let result = num.toString(); // convert the number to string literal

result = num.valueOf(); // just log the value of the variable

result = num.toFixed(2); // round the number to 2 decimal places

result = num.toPrecision(2); // round the number to 2 digits

result = num.toExponential(2); // convert the number to exponential notation

result = num.toLocaleString(); // convert the number to a localized string

// on a normal scenario, the number object doesn't have a a length property, so we convert to string first then use the length property
result = num.toString().length;

result = num.toString().split(""); // convert the number to an array of characters

result = num.toString().split("").reverse(); // reverse the array of characters

result = num.toString().split("").reverse().join(""); // reverse the array of characters and join them back to a string

result = Number.MAX_VALUE;

// and more can be done
console.log(result);
