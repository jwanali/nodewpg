const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = i + 1;
};
let sum = 0;
for ( let i = 0; i <= numbers.length - 1;i++) {
    sum += numbers[i];
    console.log(sum);
}
if (sum === 500500) {
    console.log('Good job!!!');
};