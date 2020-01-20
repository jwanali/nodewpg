let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (sum > 400) {
        console.log(`we broke the loop at cycle ${i} the result is: ${sum}`);
        break;
    } else {
        sum = sum + i;
    }
}
/*let result = 0 ;
for (let i = 0; i <= 1000; i++) { 
    if (result > 400) {
        break;
} else {
    result = result + i;
}
} console.log(result);*/
/**
 * Exercise 98
Create a new index98.js file
Add all the numbers bettwen 0 and 1000 using for statement
The iteration must break if the partial result is bigger than 400
Show the result as output
 */