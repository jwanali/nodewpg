const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = i + 1;
};
const incrementedNumbers = numbers.map(function(number) {
    return number + 10;
});
numbers.forEach(function(print, index) {
    console.log(`index: ${index + 1}, original number: ${print}, incremented value: ${incrementedNumbers[index]}`);
});