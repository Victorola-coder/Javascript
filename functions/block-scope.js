// code blocks

const x = 10;

if (true) {
  //   const x = 100;

  const y = 150;

  console.log(x); // 10
  console.log(x + y); // 160
}

// console.log(y); // this wont run because y is not available outside the if code block

for (let i = 0; i < 10; i++) {
  // console.log(`${i} yo`);
}

// VAR is doesn't work like other variables, its accessible outside the code block

if (true) {
  var a = 8;
  const b = 7;
  console.log(a + b);
}

console.log(a); // 8 will still work
