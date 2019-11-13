let result = 0;
let count = 0;
for ( let i = 0; i <= 1000; i++) {
    if (count < 20) {
        if ((i % 2) === 0) {
            count = count + 1;
        result = result + i;
        console.log(result);
        }
    } else {
        break;
    }
}
console.log(result);