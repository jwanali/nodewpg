let i = 0;
let oddSum = 0;
let evenSum = 0;
while (i <= 1000) {
    if ((i % 2 ) !== 0) {
        oddSum = oddSum + i;
      console.log('partial result for adding odd number =',oddSum);  
    } else {
        evenSum = evenSum + i;
        console.log('partial result for adding even number =',evenSum);  
    }
    i++;
}
console.log ('final result for adding odd number = ',oddSum);
console.log ('final result for adding even number = ',evenSum);
console.log('even + odd = ',evenSum + oddSum );
/**
 * Exercise 70
Create a new index70.js file
Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too
 */