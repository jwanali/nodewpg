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
    console.log(mutants[index].toUpperCase());
    console.log(mutants.indexOf(`${mutants[index]}`)); 
}