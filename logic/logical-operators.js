/*
LOGICAL OPERATORS= AND OR NULL(??)

* AND - && - return true if everything you are comparing is true and vice versa, it runs from left to right and will check through, if anyone is true, it run it and the next one will be unreached
* OR - || - return true  if one of the element we are comparing is true and vice versa, this is just the opposite of AND (&&)
* NULL - more like undefined shits nd all
*/

console.log(10 < 30 && 40 < 60); // both must be true

console.log(10 < 4 || 7 < 2);

// && - return the first truthy value or the last one

let a;
