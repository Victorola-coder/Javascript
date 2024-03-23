function validate() {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

  return re.test();
}

console.log(validate());

console.log(NaN === NaN);
/*
 *in JavaScript compare values by checking for strict equality.
 *NaN is considered unique in that it doesn't equal any other value, including itself.
 */
