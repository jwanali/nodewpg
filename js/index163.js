function add() {
    let result = 0;
    for (let index = 0; index <= arguments.length -1;index++) {
        result = result + arguments[index];
    };
    return result;
};
console.log(add(5,15,25,7,27));
console.log(add(51,17,15,23,48,19,7,15,33,11));