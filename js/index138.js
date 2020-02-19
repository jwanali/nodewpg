const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
const updatedMutants = mutants.map(function(mutant) {
    if(mutant === "Professor X" || mutant === "Logan" || mutant === "Gambit" || mutant === "Phoenix") {
        return '<3' + mutant;
    } else {
        return mutant;
        }
})
console.log ('The original array is:',mutants);
console.log('The updated array is ', updatedMutants);
/**
 * Exercise 138
Create a new index138.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit
Iterate over the mutants array
Add <3 symbol before the mutant name if the iterated name is one of the following:
Professor X
Logan
Phoenix
Gambit
Show the original mutant array items as output
Show the updated mutant array items as output
 */