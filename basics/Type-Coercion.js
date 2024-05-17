// Type coercion happens when JavaScript implicitly change thr  type of  a variable to suit the situation.
let v;

v = 7 + "7"; // 77 - JS coverts the 7 to string and concatenate it to "77" - js reads + here as a concatenates and not an arithmetic operator

v = 7 * "7"; // 49 - here, the string is converted to number to suit the case and then multiplied

v = 7 - "7"; // same as line 4

v = 7 / "7"; // same as line 6

v = 7 % "7"; // same as division

console.log(v, typeof v);

// I Noticed "-" and "+" will be treated same and "/" and "*" will be treated same
