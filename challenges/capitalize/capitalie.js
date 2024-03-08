let word = "developer";

let capitalizedWord;

/*
SLICE()  approach
*/
capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

/*
SUBSTRING() approach
*/
capitalizedWord = word.charAt(0).toUpperCase() + word.substring(1);

/*
Template Literal

*/

capitalizedWord = `${word[0].toUpperCase()}${word.substring(1)}`;

console.log(capitalizedWord);
