let iceCreamFlavors = [
    'orange',
    'apple',
    'black berry',
    'mint',
    'blue moon',
    'cherry',
    'chocolate',
    'cookies and cream',
    'french vanilla',
    'banana'
];
for (let index = 0; index <= iceCreamFlavors.length - 1; index++) {
    console.log('Flavor:',iceCreamFlavors[index]);
}
/**
 * Exercise 129
Create a new index129.js file
Define a iceCreamFlavors array with 10 flavors
Iterate over each iceCreamFlavors items and show the flavors name as output
 */
const numbers = [1, 4, 2, 5, 3, 8, 9];
const sortedNumbers = numbers.sort();

console.log(sortedNumbers);
// [ 1, 2, 3, 4, 5, 8, 9 ]
console.log(numbers);
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers);
console.log(numbers);
