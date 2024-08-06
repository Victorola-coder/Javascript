const userDetails = {
  id: Math.random() * 10,
  title: "stay alive",
  user: {
    tag: "@vickyjay",
    fullName: "Victor Tolu",
    isOnline: false,
    address: {
      state: "lagos",
      city: "lekki",
      street: "13B, cosmos estate",
    },
  },
  occupation: "sofrware guy",
};

const {
  id,
  title,
  user: {
    fullName: fn, // renamed "fullName" to "fn", and it can be used anywhere as fullName
    address: { city },
  },
} = userDetails;

// console.log(userDetails);

// im not really sure if we can destructure array the same way we do wth objects,  lets see below the way its been done

// DESTRUCTURE ARRAY
const skills = [
  "tech",
  "design",
  "art",
  "skating",
  "singing",
  "coding",
  "writing",
  "swimming",
  "chess",
];

// const [one, two, ...rest] = skills;

const number = [1, 2, 3, 4, 5];

const [yo, ...rest] = number; // you represent the first index in the array and it will return the value that matches it's position

// console.log(yo, rest.join(" "));

const legs = ["wo", 1, 7, 7];

x = [...legs, "mandem"];

// console.log(x);

// NOTE the code was written two months after - MAY 17th Friday 2024, man i almost forgot stuffs bro
const data = {
  name: "victor",
  age: 20,
  address: {
    state: "lagos",
    city: "lekki",
    street: "13B, cosmos estate",
  },
  occupation: "student",
  skills: ["tech", "design", "art", "skating"],
  hobbies: ["singing", "coding", "writing", "swimming", "chess"],
  relationship: "single, not searching",
};

const { address, name: n } = data;

console.log(n);

/* 
---------------------
NOTE! this code runs from the top to the bottom and most of the method and property mutate the original object.
---------------------
*/

