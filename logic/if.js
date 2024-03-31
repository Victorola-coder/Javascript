/*
*conditionals statement are really things we can do without when building stuffs in real word

Writing an if block with javascript is like this in syntax

*/

if (!true) {
  console.log("I need you now");
} else {
  console.log("i need you");
}

// shorter way of writing if, without braces
if (true) console.log("yo!");

const x = 70;

const y = 60;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${y} is NOT  greater than ${x}`);
}

// ELSE-IF-NESTING

const date = new Date(2024, 1, 10, 13, 0, 0);

const hours = date.getHours();
// console.log(date);

if (hours < 12) {
  console.log("Good Morning");
} else if (hours < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

// nested if block
const d = new Date();

const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good Morning!");

  if (hour === 6) {
    console.log("Wake up!");
  }
} else if (hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Night!");

  if (hour >= 20) {
    console.log("zzzzzzzzzzz!");
  }
}
