function validate() {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

  return re.test();
}

console.log(validate()); //false

console.log(NaN === NaN); // false
/*
 *in JavaScript compare values by checking for strict equality.
 *NaN is considered unique in that it doesn't equal any other value, including itself.
 */

//  ARITHMETIC SHITS - saw some images on twitter and tried to run it on my console and im very surprised the way JavaScript always work

console.log("2" + "2" + "0");

let booleanTest = "22" + "3";

let result = Boolean(booleanTest);

console.log(result, booleanTest);
