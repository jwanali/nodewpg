const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
let creatString = '';
mutants.forEach(function(string){
    if (string === 'Iceman' || string === 'Logan' || string === 'Phoenix') {
        creatString += string + ' ';
        console.log(`\nThe generated string now is: `,creatString) ;
    }
})
/**
 * Exercise 136
Create a new index136.js file
Define a mutants array and assign the following values
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit
Iterate over each mutants item using forEach
The objective is to create a string value with Iceman, Logan and Phoenix
To create the string you need to get the names while iterating the mutants array
Once the iteration is over show the generated string with the selected mutants names
 */