//first way
let f0 = 0;
let f1 = 1;
let f2 = 1;
console.log(f1);
let n = 25;
let i = 2;
let fiboArray = [0,1];
while (i <= n) {
f2 = f1 +f0 ;
fiboArray[i] = f2;
console.log(f2);
f0 = f1;
f1 = f2;
i++;
}
console.log(fiboArray);
// second way
function fibo (n1){
    if (n1 < 2) {
        return n1;
    } else {
        return (fibo(n1-1) + fibo(n1-2));
    } 

}
console.log ('fibonacci (25) = ', fibo(25));

// third way
function fib(n){
    let arr = [0, 1];
    for (let i = 2; i <= n ; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
    console.log(arr);
   return arr[n];
    
  }
  
 console.log ('fibonacci (25) =',fib (25));
/**
 * Exercise 75
Create a new index75.js file
Write a program that will show the first 10 Fibonacci sequence numbers
 */