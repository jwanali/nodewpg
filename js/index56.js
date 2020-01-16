let number = 10;
let result =  (number % 2 === 0) ? `${number} is an even number`: `${number} is an odd number`;
console.log(result);
result = (number % 2 !== 0) ? `${number} is an odd number`: `${number} is an even number`;
console.log(result);
console.log(number % 2 === 0,"\n or");
console.log(number % 2 !== 0);