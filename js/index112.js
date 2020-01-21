function showNumbers(startNumber, endNumber) {
    if (typeof startNumber === 'number' && typeof endNumber === 'number') {
      if( startNumber > endNumber) {
        for(let index1 = startNumber;index1 >= endNumber; index1--){
            console.log(index1);
        }
       } else if (endNumber > startNumber) {
        for(let index1 = startNumber;index1 <= endNumber; index1++){
            console.log(index1);
        }
       } else if (startNumber === endNumber) {
        console .log(`${startNumber}`)
       }
     } else {
      if (typeof startNumber !== "number" && typeof endNumber !== "number") {
        console.log(`error ${startNumber} and ${endNumber} are not a numbers`);
    } else if (typeof startNumber !== "number") {
        console.log(`error ${startNumber} is not a number`);
    } else {
        console.log(`error ${endNumber} is not a number`);
    }
       }
}
showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers(100,300);
showNumbers('ee',300);
showNumbers(4,-5);
showNumbers(22,'r');
showNumbers('h','r');
/**
 * Exercise 112
Create a new index112.js file
Define a showNumbers function that accepts two numeric parameters: start and end
The showNumbers function will show all the numbers between the start and end numbers
If start is bigger than the second one show the numbers from higher to lower
If start is smaller than the second one then show the numbers from lower to higher
Call the showNumbers function using the following parameters:
start: 0, end: 1000
start: 1000, end: 0
start: 100, end: 100
start: "100", end: 300
Find a way to deal with the following scenarios:
start and end are the same number
parameters that aren't numbers
 */