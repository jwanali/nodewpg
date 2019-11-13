const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast','Phoenix', 'Logan', 'Gambit'];
const addingSymbol = mutants.map(function(addsymbol) {
    if ((addsymbol === "Professor X") || (addsymbol === "Logan") || (addsymbol === "Phoenix") || (addsymbol === "Gambit")) {
        return `<3 ${addsymbol}`;
    } else {
        return addsymbol;
    }
});
mutants.forEach(function(print,index) {
    console.log(`The original mutant item: ${print}`);
    console.log(`The updated mutant item : ${addingSymbol[index]}\n`);  
});