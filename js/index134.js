const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = i + 1;
};
let sum = 0;
for ( let i = 0; i <= numbers.length - 1;i++) {
    sum += numbers[i];
    console.log(sum);
}
if (sum === 500500) {
    console.log('Good job!!!');
};
/**
 * Exercise 134
Create a new index134.js file
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong
 */