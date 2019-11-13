let i = 0;
let f = 0;
do {
    if ((i % 2 ) !== 0) {
        f = f + i;
        console.log(f);
    };
    i++;
} while (i <= 1000);