const mutants = ['Professor','Cyclops','Iceman','Angel','Magento','Beast','Phoenix','Logan','Gambit'];
for (let index = 0; index <= mutants.length - 1; index++) {
    if (mutants.indexOf('Magento') > -1) {
       break;
    }
    console.log(mutants[index]); 
}
let indexOfMagneto = mutants.indexOf('Magento');
while (indexOfMagneto <= ( mutants.length-2)) {
    mutants[indexOfMagneto]= mutants[indexOfMagneto + 1];
    indexOfMagneto++;
    if (indexOfMagneto === mutants.length-1) {
        mutants.pop();
    }
}
for (let index = 0; index <= mutants.length - 1; index++) {
    if (mutants.indexOf('Magento') > -1) {
 break;
    }
    console.log(mutants[index].toUpperCase(),': ',mutants.indexOf(`${mutants[index]}`));
}
/**
 * Exercise 133
Create a new index133.js file
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
First part
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list
Second part
Fin out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position
 */