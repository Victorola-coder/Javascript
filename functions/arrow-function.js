// ONE OF THE SWEET FEATURES THAT CAME WITH ES6

// first off, the js funtion is declared this way

function NetworkSpeed(rate) {
  return `your internet connection speed it ${rate}kb/s`;
}

const result = NetworkSpeed(Math.random().toFixed(3) * 100);

console.log(result);

// LETS REWRITE THIS WITH ES6 ARROW FUNCTION, ITS CLEANER, CONCISE AND SHORTER- its mostly declared like an expression
const add = (x, y) => {
  return x + y;
};

console.log(add(1, 2));

// i can rewrite in a shorter way

const subtract = (x, y) => x - y;
console.log(subtract(9, 2));

// here, im doing way with the return key word

// in a more shorter way

// IMPLICIT RETURN
const squareNumber = (x) => x * x; // const squareNumber = x => x * x; when i save my editor adds (), either waay it will work
console.log(squareNumber(7));

// another shorter way
// IM NOT SURE THERE IS ANY SHORTER WAY

// forEach loop

const numbers = [1, 2, 3, 4, 5];
// normal way using anonymous function
numbers.forEach(function (num) {
  console.log(num);
});

// this can be rewritten in a more cleaner and shorter way
numbers.forEach((n) => {
  console.log(`number ${n}`);
});
