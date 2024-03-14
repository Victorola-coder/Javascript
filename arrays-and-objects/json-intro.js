// JSON - JavaScript Object Notation

/*
----------------------------
* Things to note when working with json objects

* both the key/value must be surrounded with a double quotes
* you can't comment stuffs in json
----------------------------
*/

const post = {
  id: 1,
  title: "YO!",
  content:
    "Hello, everyone! Welcome to my Youtube channel, in this video, im going to show you that consistency is hard, but im i have something harder",
};

// Converts a JavaScript Object Notation (JSON) object into a string.
const str = JSON.stringify(post);
/*
 * this is what we send to the db as a frontend dev,we cant't access property on the string,
 * we have to parse it to convert it to
 */

// Converts a JavaScript Object Notation (JSON) string into an object.

const parse = JSON.parse(str);

console.log(parse.title.toLowerCase());

// ARRAY OF OBJECTS
const randomPerson = [
  {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["basketball", "cooking"],
  },
  {
    name: "Jane",
    age: 20,
    city: "LA",
    hobbies: ["movies", "sports"],
  },
  {
    name: "Jack",
    age: 25,
    city: "Paris",
    hobbies: ["music", "painting"],
  },
];

const arr = JSON.stringify(randomPerson);

const omo = JSON.parse(arr);

console.log(omo[0].name);
