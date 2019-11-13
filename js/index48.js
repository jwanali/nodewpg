let message = "3.14 it's a great number but 42 it's the answer to life." ;
const pi = parseFloat( message.slice(0,4));
const answerToLife = parseFloat(message.slice(29,31));
const result = pi + answerToLife;
console.log('result : ',result);
console.log(result.toString()+ ` is the result of adding pi and answerToLife`);