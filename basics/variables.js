// RESERVED KEYWORDS - inbuilt Javascript that cannot be used for naming variables and stuffs, eg function, var, let , const, if, do, while and more.

//  you can use the data types keyword to declare variables but its not a good practice

// LET - for declaring variables that can be reassign but not redeclare, it was introduced in version ES6 with "const Keyword", let is a block scoped variable and it is a reserved keyword

// YOU can declare a variable with let and not assign it to any value, automatically, the value is undefined

let name = "Victor";

let age; //undefined

// i can come down to assign it but its more  common in a if/else block

// BLOCK SCOPE VARIABLES CANNOT BE REDECLAREd

age = 10;

console.log(age); // 10

// here name is declared with let and assigned to "Victor" string

// CONST - const is just like the name sound for declaring variables that are the values are meant to be static, in other words, when you declare any variables with "const", it cant be re assigned or redeclare. its also a block scoped and a reserved keyword

const nickName = "VickyJay";

// you can't declare a "const" variables without assigning it,

// nickName = "Yo";  //  Assignment to constant variable.

console.log(nickName);

// VAR - var is the old way of declaring variables and its a global scoped variable, when it come to hoisting and it can be accessible outside the scope of his declaration. It can be redeclare and reassign - very crazy stuffs, its  also a reserved keyword

var isActive = true; // declared a variable name isActive here

var isActive = isActive * true; // also redeclare it here with same name and all

console.log(isActive);

// NOTE - it might be unsafe to use "var" to reduce bugs and all, in mst cases i will use const and if needs arise i use let

// NAMING CONVENTION - this are the pattern and ways that a variable can be declared or assigned

// camelCase - the first character is lowercase and the next reasonable one is capitalized

const fullName = "Victor";

// PascalCase  - the first letter is capitalized

const LastName = "Olatunji";

// smallcase - all the letter are in small caps,  not really recommended ⚠

const nickname = "VickyJay";

/* NOTE - variables name are so case sensitives 

const lastname is different from const LastName


its possible to declare many variables at once and all

*/

let a = 1,
  b = 5,
  c = 7;

console.log(a, b, c);
