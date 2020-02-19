const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = i + 1;
}
const incrementedNumbersArray = numbers.map( function(number) {
    return number + 10;
})
incrementedNumbersArray.forEach(function(number,index) {
    console.log ('index: ',index +1,'Original number is: ',numbers[index],'increment value is: ', number);
})
/**
 * Exercise 137
Create a new index137.js file
Define a numbers array with values between 1 and 1000
Iterate over each numbers item using map and increment the value in 10
If value is 1 then it should be 11
If value is 2 then it should be 12
and so on..
Show the following output for each element:
index: 1, original number: 1, incremented value: 11
 */