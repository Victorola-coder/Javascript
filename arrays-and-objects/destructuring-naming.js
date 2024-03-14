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
  occupation: "student",
};

const {
  id,
  title,
  user: {
    fullName: fn, // renamed "fullName" to "fn", and it can be used anywhere as fullName
    address: { city },
  },
} = userDetails;

console.log(fn);

// im not really sure if we can destructure array the same way we do wth objects,  lets see below the way its been don

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

const [yo, ...rest] = number; // yo represent th first index in the array and it will return the value that maths it's position

console.log(yo, rest.join(" "));

const legs = ["wo", 1, 7, 7];

x = [...legs, "mandem"];

console.log(x);
