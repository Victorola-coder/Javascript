/*
---------------------------------------------------------------------------
 
* OBJECT LITERAL - A common data structure that holds key/value pairs
---------------------------------------------------------------------------
 */

// create a simple objects literals, Note! objects can take other data types as key
const person = {
  name: "Victor Ola",
  nickName: "VickyJay",
  age: 18,
  career: "Software Engineering",
  relationshipStatus: "liked someone",
  spouse: null,
  hobbies: ["coding", "music", "swimming", "running", "learning"],
  stacks: [
    "JavaScript",
    "Typescript",
    "Tailwindcss",
    "HTML",
    "CSS",
    "ReactJS",
    "NextJs",
  ],
  address: {
    state: "Osun",
    city: "Ife",
    country: "NG",
  },
};

// accessing elements in the object

let x;

x = person.address.city; //ife

x = person.hobbies[0]; //coding

// updating the key value of the object

x = person.name = "OVT";

// Adding on to the arrays elements/key

x = person.greet = function () {
  console.log(
    `Hello my name is ${this.name} and i am ${this.age} years old and i love ${this.hobbies[0]} and i live in ${this.address.city}, ${this.address.state} state, ${this.address.country}`
  );
};

x = person.greet();

// deleting an object key

delete person.spouse;

x = person;

// console.log(x);

console.log(x);
