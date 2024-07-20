let x;

const fruits = ['orange', 'pineapple', 'grape', 'banana'];
const car = ['toyota', 'volks', 'nissan', 'passat'];

// fruits.push(car)

// x = fruits.slice(1, 3)

// x = fruits.concat(car);

// x = [...fruits, car];

console.log(x);

// challenge-3(array)

const arr = [1, 2, 3, 4, 5];

arr.push(6);

arr.unshift(0);

arr.reverse();

console.log(arr);

//challenge-4(array)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1

// const arr3 = [arr1.splice(0, 5), arr2.splice(1, 5)]

// const arrResult = arr3.flat()

// solution 2

// const arr4 = arr1.slice(0, 4).concat(arr2)

// solution3

let y = arr1.concat(arr2);

let z = [...arr1, ...arr2];

z.splice(4, 1);

console.log(z);

// object challenge

const library = [
  {
    id: 1,
    title: 'How to Make Heaven',
    author: 'Alex Gram',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 2,
    title: 'Javascript for Vip',
    author: 'Ebenezer Ben',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 3,
    title: 'No one cares',
    author: 'Butter Bread',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const json = JSON.stringify(library);
console.log(json);