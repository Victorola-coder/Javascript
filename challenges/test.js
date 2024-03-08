// write a function that returns

function factorial(n) {
  if (n === 1 || n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(4));

class FactorialCalculator {
  static calculateFactorial = (n) =>
    n > 1 ? n * this.calculateFactorial(n - 1) : 1;
}

// Example usage
const number = 5;
const factorial = FactorialCalculator.calculateFactorial(number);

console.log(`Number: ${number}`);
console.log(`Factorial: ${factorial}`);
