function even(evenNumber) {
    return (evenNumber % 2);
}
function result(validation,number){
    if (validation(number)) {
        console.log(`${number} is an odd number`);
    } else {
        console.log(`${number} is an even number`);
    }
}
result(even,2);
result(even,5);
result(even,3);
result(even,24);
result(even,12);
/**
 * Exercise 111
Create a new index111.js file
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd
 */