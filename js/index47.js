let student = ' Yuriy, Vruttik, Elisa, Diana, Ubeydullah ';
let result = student.split(',');
console.log('Students name: ', result);
console.log(student.split(' '));
console.log(student.split(''));
console.log(student.split());
console.log(student.length);
console.log(result.length);
let array = [1,2,3,22,33,11,66,55,22,44,'hi','js'];
console.log(array);
console.log(student.charAt(17));
console.log(student.includes('i'));
console.log(student.indexOf('Yuriy'));
console.log(student.repeat(4));
console.log(student.replace('i',6));
console.log(student.trim());
console.log(student.search('El'));
console.log(student);
/**
 Create a new index47.js file
Define a students variable and assign 5 student names from your class, separated by commas
Define a result variable and use the students variable split method to get a students name array and assign it as result variable value
Show the result value as output: console.log('Students names:', %result%) (something like this)
 */