const todo = {}; // creates an empty object literal

// const todo = new Object(); // creates an empty object object

let x;

/*
 * assign key value to the todo empty objects
 */
x = todo.name = "asake";
x = todo.isSleeping = false;
x = todo.date = new Date();
x = todo.isRich = false;
x = todo.address = {
  coords: {
    lat: 29.99,
    lng: -94.4,
  },
  city: "Houston",
  state: "Texas",
  country: "USA",
};

x = todo.address.coords.lat;

/*
 * SPREAD OPERATOR IN OBJECTS
 */

// lets create a new objects and try to copy the properties from the todo object, there are some few old ways you can to this but i think the spread operators is concise and modern

const obj = {
  name: "asake",
  isSleeping: false,
  date: new Date(),
  isRich: false,
};

const obj2 = {
  class: "ss3",
  complexion: "dark",
  height: "5ft",
};

const spread = { ...obj, ...obj2 };

x = spread;

/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
NOTE: SPREAD OPERATORS WAS INTRODUCED IN ES6, SO MAKE SURE YOU ARE USING THE LATEST VERSION OF JAVASCRIPT AND THERE WAS A WAY IT IS BEEN DONE before es6
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// const oldWay = Object.assign({}, todo); // creates a new object and copies the properties from the todo object

const oldWay = Object.assign(obj, obj2, {}); // creates a new object and copies the properties from the todo object

x = oldWay;

/*
 * ARRAY OF OBJECTS
 */

const person = [
  { id: 0, name: "temi" },
  { id: 1, name: "tolu" },
  { id: 2, name: "awo" },
];

// accessing the name of the person on this array
x = person[0].name; //temi

x = Object.entries(todo); // Returns an array of key/values of the enumerable properties of an object

x = Object.keys(todo); //Returns the names of the enumerable string properties and methods of an object.

/*
 * the length property cannot  be used directly on the object Object,hence we access the key or value
 * we can use the length property to return the number of index in the object
 */

x = Object.keys(todo); //Returns the names of the enumerable string properties and methods of an object.

x = Object.values(todo).length; //Returns an array of values of the enumerable properties of an object

// has own property is used to check if a key exists on an object, it returns a boolean
x = todo.hasOwnProperty("age"); //Determines whether an object has a property with the specified name. - false

console.log(x);

// PRETTY MUCH HERE I THINK.
