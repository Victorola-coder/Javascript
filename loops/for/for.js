// NOTE - FoR LOOP

/*******************
 What is loop ? Loop is control structure of programming, it allows us to perform iteration, iteration is just a way of repeating must certain stuffs over and over again until a certain condition is met.
*******************/

// NOTE - syntax

// for ([initialExpressions]; [conditionExpression], [increment])

// E.g - just loop between numbers from 0 - 10

for (let i = 2; i <= 10; i += 5) {
  console.log("number" + i);
}

// NOTE  BLOCK SCOPE
/*
------------------------------------------------
loop are also considered as block, just like if/else statements, any variables we define using let && const wont be accessible outside the scole

------------------------------------------------
*/

for (let i = 0; i < 100; i += 10) {
  const msg = "Number" + i;
  console.log(msg);
}

// if i try to log `msg` here,  its not accessible i would a reference error
// console.log(msg);

// note - the code below will check in the loop when it meet the condition in the if block and log/display what is in there

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 is my favorite number");
  }

  console.log("Number " + i);
}

/*
# NESTED LOOOPs - at some points, its possible to nest two or loop in each other 
*/

for (let i = 1; i <= 12; i++) {
  // console.log("number" + i);

  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }

  console.log("number" + i);
}

// NOTE - the looop above can be used to solve multiplication tables stuffs
