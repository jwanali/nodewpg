let evenNumbers = function (n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
evenNumbers(50);
evenNumbers(75);
evenNumbers(100);
evenNumbers(150);
evenNumbers(200);
/**
 * Exercise 103
Create a new index103.js file
Define a evenNumbers variable and assign a function as value
When executed the evenNumbers function will print even numbers between 0 and 100 as output
Execute this function 5 times
 */