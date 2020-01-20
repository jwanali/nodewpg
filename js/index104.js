let  fibonacci = function(n) {
    let f0 = 0;
let f1 = 1;
let f2 = 1;
let fiboArray = [0,1];
let i = 2;
for (let i = 2; i <= n; i++) {
    f2 = f1 +f0 ;
    fiboArray.push(f2);
    f0 = f1;
    f1 = f2;  
}
console.log(`fibonacci(${n}) = ${f2}\n`,fiboArray);
}
fibonacci(10);
console.log('========');
fibonacci(15);
console.log('========');
fibonacci(20);
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
 * Exercise 104
Create a new index104.js file
Define a fibonacci variable and assign a function value
When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
Execute this function 3 times
 */