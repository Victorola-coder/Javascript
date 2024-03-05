let word = "developer";

// solving using charAt method to get the initial character of the "word" variable, then using the  "+" operator to concatenate with the subtring to seleect the remain characters

newWord = word.charAt(0).toUpperCase() + word.substring(1);

// directly used the substring property
newWord = word.substring(0, 1).toUpperCase() + word.substring(1);

// lets use arrray method here
newWord = word[0].toUpperCase() + word.substring(1);

// template literals
newWord = `${word[0].toUpperCase()}${word.slice(1)} `;
console.log(newWord, word.length, newWord.length);
