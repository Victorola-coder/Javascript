let word = "developer";

let capitalized;

// solve using charAt method to get the initial character of the "word" variable, then using the  "+" operator to concatenate with the substring to select the remain characters
capitalized = word.charAt(0).toUpperCase() + word.substring(1);

// directly used the substring property
capitalized = word.substring(0, 1).toUpperCase() + word.substring(1);

// lets use array method here with substring
capitalized = word[0].toUpperCase() + word.substring(1);

// template literals with slice
capitalized = `${word[0].toUpperCase()}${word.slice(1)} `;

console.log(capitalized, word.length, capitalized.length);
