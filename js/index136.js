const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast','Phoenix', 'Logan', 'Gambit'];
let creatString = '';
mutants.forEach(function(string){
    console.log(string);
    if ((string === ("Iceman")) || (string === ('Logan')) || (string === ('Phoenix'))) {
        creatString += `${string} `;
        console.log(`\nThe generated string now is: `,creatString) ;
    }
});