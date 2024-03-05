function isGapful(number) {
  return (
    number >= 100 &&
    number % parseInt(String(number)[0] + String(number).slice(-1)) === 0
  );
}

// USE CASE
// const userInput = parseInt(prompt("Enter a number:"));
const result = isGapful(210);
console.log(result);
