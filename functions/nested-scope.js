// More like function of a function😅 as the case maybe, Nested function/ closures

function parent() {
  const x = 100;
  console.log(x);

  function firstChild() {
    const y = 100;

    console.log(x + y);
  }
  //   console.log(y); // y cant be accessed on the parent

  firstChild();
}

parent();

// nested if

if (true) {
  const t = 1065;

  console.log(t);
  if (t === 1065) {
    let pi = 3.142;

    console.log(pi);
  }

  //   console.log(pi); // pi can not accessed here too
}
