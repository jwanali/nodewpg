let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix','logan'];
if (mutants.indexOf('Professor X') > -1 && mutants.indexOf('logan') > -1 ) {
    console.log('We love X-Men');
} 
if (mutants.indexOf('Gambit') === -1) {
    console.log('X-Men sucks');
}
/**
 * Exercise 132
Create a new index132.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Logan
Show the following message only if Logan and Professor X are mutants items:
We love X-Men
Show the following message only if Gambit is not a mutants items:
X-Men sucks
 */