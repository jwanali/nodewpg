let f0 = 0;
let f1 = 1;
let f2 = 1;
console.log(f1);
let n = 25;
let i = 2;
while (i <= n) {
f2 = f1 +f0 ;
console.log(f2);
f0 = f1;
f1 = f2;
i++;
}