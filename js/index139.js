const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = i + 1;
};
const even = numbers.filter(function(number) {
    return number % 2 === 0;
});
const odd = numbers.filter(function(number) {
    return number % 2 !== 0;
});
console.log('The last 10 odd numbers');
for (let i = odd.length - 1; i >= odd.length - 10; i--){
    console.log(odd[i]);
};
console.log('The last 10 even numbers');
for (let i = even.length - 1; i >= even.length - 10; i--){
    console.log(even[i]);
};