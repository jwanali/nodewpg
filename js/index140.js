const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel','Magneto', 'Magneto', 'Beast','Phoenix', 'Logan', 'Gambit'];
const filteredList = mutants.filter(function(mutant) {
    return ((mutant !== 'Magneto') && (mutant !== 'Iceman') && (mutant !== 'Gambit'));
});
console.log('The mutants: ',mutants)
console.log('The filtered mutants: ',filteredList);