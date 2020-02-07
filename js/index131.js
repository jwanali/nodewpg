let femaleStudents = ['marian','dina','liza','nicol','sara'];
let maleStudents = ['yuriy','simon','abdi','mark','nico'];
let students = femaleStudents.concat(maleStudents);
const sortedStudents = students.sort();
console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);
console.log("=====***=====");
let index = 0;
while (index <= maleStudents.length-1) {
    console.log(maleStudents[index]);
    index++;
} 
console.log("=====***=====");
for (let index = 0 ; index <= sortedStudents.length - 1; index++) {
    console.log(sortedStudents[index].toUpperCase());
}
console.log("=====***=====");
for (let index = 0 ; index <= sortedStudents.length - 1; index++) {
    console.log(students[index].toUpperCase());
}
/**
 * Exercise 131
Create a new index131.js file
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
Each femaleStudents name using numeric indexes
Each maleStudents name using while
Each students name using for
 */
