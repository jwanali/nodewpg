let message = "3.14 it's a great number but 42 it's the answer to life.";
const pi = parseFloat(message);
let answerToLife = parseInt(message.substr(29,2));
let result = pi + answerToLife;
console.log('result : ', result);
console.log(result.toString().concat(" is the result of adding pi and answerToLife."))
console.log(result," is the result of adding pi and answerToLife.");
/**
 * Create a new index48.js file
Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
Declare a result value and assign the result of adding pi and answerToLife values
Show the result variable value and name as output (use console.log(variable name, variable value))
Show the following output: 45.14 is the result of adding pi and answerToLife
Concatenate the strings and transform 45.14 (result value) from number to string using toString method
 */