// STEP 1

const library = [
  {
    title: "A man called god",
    author: "Jumong Owen",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Rich Till I die",
    author: "Kiss Daniel",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Lonely at the top",
    author: "Asake Ololade",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// STEP 2

// finished reading all the books, mark all read, true

let x;

x = library[0].status.read = true;
x = library[1].status.read = true;
x = library[2].status.read = true;

// console.log(x, library);

// STEP 3

const { title: firstBook } = library[0];

// console.log(firstBook);

// STEP 4

const obj = JSON.stringify(library);

console.log(obj);

// QED, VickyJay
