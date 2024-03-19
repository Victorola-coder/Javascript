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

// WORKING IN WITH LOOP, IF YOU USE VAR, THE INDEX WILL BE ACCESSED OUTSIDE THE FUNCTION

for (var i = 0; i < 10; i++) {
  console.log(i + i);
}

console.log(i ** i); // this is not what we want, let us be super careful when using "var"

/*
 * interesting stuffs about "var" its function scoped, when var is declared in a function, its not accessed outside the function
 */

function AmaVar() {
  var isVickyJay = true;

  console.log(isVickyJay);
}

AmaVar();

console.log(isVickyJay); // undefine

// I ALWAYS RECOMMEND TO USE LET AND CONST, USE VAR WHEN YOU REALLY KNOW WHAT YOU ARE DOING, ANOTHER THING IS WHEN WE DECLARE VARIABLE WITH VAR, IT WILL GET ADDED TO THE WINDOWS OBJECT

var foo = 2;
const bar = "bar bar black salt";

// this "var foo" can bw accessed using window.foo
// window.foo //= >2
