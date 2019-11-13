let femaleStudents = ['maryan','diana','gloria','christin','elisa'];
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
