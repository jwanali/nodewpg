const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix'];
let newmutants = [...mutants];
let newmutants1 = mutants;
console.log('mutants:',mutants);
const sortedMutants =[...mutants.sort()];
console.log('mutants after sort:',mutants,'\n\n')
const reversedSortedMutants = [...mutants.reverse()];
console.log('mutants:after reverse',mutants,'\n\n')
const joinedMutants = mutants.join(' * ');
console.log(joinedMutants);
console.log('mutants:',mutants,'\n\n')
console.log('newmutants"[...mutants]"',newmutants,'\n\n');
console.log('newmutants1= mutants:',newmutants1,'\n\n')
console.log(sortedMutants);
console.log(reversedSortedMutants);
/**
 * Exercise 130
Create a new index130.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
Original mutants list
Sorted mutants list
Reversed mutants list
Mutants name separated by *
 */