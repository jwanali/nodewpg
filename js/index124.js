const movies = ['turtles can fly','Incredibles 2','Ready Player One','Mission: Impossible - Fallout','four minutes','Half Moon','The Lord of the Rings','The Legend of 1900','yol "the way"','Bohemian Rhapsody'];
console.log(movies[0].toUpperCase(),'\n',movies[movies.length-1].toUpperCase());
for (let i = 0; i <= movies.length-1; i++) {
    console.log(`the ${i+1}th movie in our list is ${movies[i].toUpperCase()}`);
}
/**
 * Exercise 124
Create a new index124.js file
Define a movies array with at least 10 movies that you really like
Show the first and last movie name from the movies array
To show the last item you need to use the movies lenght property to make it dynamic
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
const numbers = [1, 4,7, 2, 5, 'f',3,10000,17, 8, 9,'a','nf','d'];
const sortedNumbers = numbers.sort(function(a, b) {
    return a - b;
  });

console.log(sortedNumbers);
// [ 1, 2, 3, 4, 5, 8, 9 ]
console.log(numbers)
console.log(numbers.reverse());
console.log(numbers);
const joinedNumbersByDash = numbers.join('-');

console.log(joinedNumbersByDash);
// 1 - 4 - 2 - 5 - 3 - 8 - 9

const joinedNumbersByComma = numbers.join(',');

console.log(joinedNumbersByComma);
const joinedNumbers = numbers.join();
console.log(joinedNumbers);
console.log(numbers);