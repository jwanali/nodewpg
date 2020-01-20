let counter = 0;
let addEvenNumber = 0;
for (let i = 0; i <= 1000; i++) {
    if (counter === 20) {
        console.log(`we broke the loop at cycle ${i} the result of adding first 20 even number  is: ${addEvenNumber}`)
        break;
    } else if ((i % 2) === 0) {
        addEvenNumber = addEvenNumber + i;
        counter++;
        console.log(addEvenNumber);
    }
}
/**
 * Exercise 99
Create a new index99.js file
Add all even numbers bettwen 0 and 1000 using for statement
The iteration must break after finding the first 20 even numbers
Show the result as output
 */