const todo = {}; // creates an empty object literal

// const todo = new Object(); // creates an empty object obejct

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
NOTE: SPREAD OPERATORS WAS INTRODUCED IN ES6, SO MAKE SURE YOU ARE USING THE LATEST VERSION OF JAVASCRIPT AND THERE WAS A 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// const oldWay = Object.assign({}, todo); // creates a new object and copies the properties from the todo object

const oldWay = Object.assign(obj, obj2, {}); // creates a new object and copies the properties from the todo object

x = oldWay;

console.log(x);
