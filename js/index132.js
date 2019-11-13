let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix','logan'];
if (mutants.indexOf('Professor X') > -1 && mutants.indexOf('logan') > -1 ) {
    console.log('We love X-Men');
}
if (mutants.indexOf('Gambit') === -1) {
    console.log('X-Men sucks');
}