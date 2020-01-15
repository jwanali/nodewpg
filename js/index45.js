let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let playerName1 = playerName.slice(0,12).toUpperCase().concat(playerName.slice(12,15));
console.log(playerName1);
let team1 = teams.slice(46,47).toUpperCase().concat(teams.slice(47,50));
console.log(team1);
let bestmessage = message.slice(12,20);
let actVerb = message.slice(34,39);
console.log(bestmessage,actVerb);
let finalResult =`${playerName1} ${bestmessage} ${team1} player${actVerb} ${team1}!!`;
console.log(finalResult);
const text12 = 'JavaScript and Java are not the same';
const result = text12.slice(0, -25); // JavaScript

console.log("playing with ",result,":) !!");
/*
Create a new index45.js file
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!
 */
var aString = 'popcorn';
/*some examples using substr */

console.log(aString.substr(0, 1));   // 'p'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'n'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'orn'
console.log(aString.substr(1));      // 'opcorn'
console.log(aString.substr(-20, 2)); // 'po'
console.log(aString.substr(20, 2));  // ''
console.log(aString.substr(-3,1));     // 'o'
console.log(aString.substr(-20)); // 'popcorn'
console.log(aString.substr(-20,1)); // 'p'
