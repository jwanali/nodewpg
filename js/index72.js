let numberOfRow = 25;
let rowCounter = 1 ;
while (rowCounter <= numberOfRow) {
     let starCounter = 1;
     let starString = '';
     while (starCounter <= rowCounter) {
        starString =  starString + '*';
         starCounter++;
     }
     console.log(starString);
     rowCounter++;
}
/**
 * Create a new index72.js file
Show the following output using while:
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
 */