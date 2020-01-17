let numberOfRow = 25;
let rowCounter = 1 ;
while (rowCounter <= numberOfRow) {
    if (rowCounter % 2 !== 0) {
        let starCounter = 1;
        let starString = '';
        while (starCounter <= rowCounter) {
           starString =  starString + '*';
            starCounter++;
        }
        console.log(starString);
    }
    
     rowCounter++;
}
/**
 * Exercise 74
Create a new index74.js file
Show the following output using while:
*
***
*****
*******
*********
***********
*************
 */
