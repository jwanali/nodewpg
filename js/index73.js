let numberOfRow = 25;
let rowCounter = 1;
while (numberOfRow >= rowCounter) {
     let starCounter = 1;
     let starString = '';
     while (starCounter <= numberOfRow) {
          starString = starString +'*';
          starCounter++;
     }
     console.log(starString);
     numberOfRow--;
}
/**
 * Exercise 73
Create a new index73.js file
Show the following output using while:
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
 */