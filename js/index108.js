function sort(number1,number2,number3,highToLow) {
    if (typeof number2 === "number" && typeof number1 === "number" && typeof number3 === "number") {
        if (highToLow) {
           if (number1 >= number2){
               if (number1 >= number3) {
                   if (number2 >= number3) {
                       return (`${number1}   ${number2}   ${number3}`);
                   } else {
                       return (`${number1}   ${number3}   ${number2}`);
                   }
               } else {
                    return (`${number3}   ${number1}   ${number2}`);
               }
           } else{
               if (number2 >= number3) {
                   if (number1 >= number3) {
                    return (`${number2}   ${number1}   ${number3}`);
                   } else {
                    return (`${number2}   ${number3}   ${number1}`);
                   }
               } else {
                return (`${number3}   ${number2}   ${number1}`);
               }
           }
        } else{
            if (number1 >= number2){
                if (number1 >= number3) {
                    if (number2 >= number3) {
                        return (`${number3}   ${number2}   ${number1}`);
                    } else {
                        return (`${number2}   ${number3}   ${number1}`);
                    }
                } else {
                     return (`${number2}   ${number1}   ${number3}`);
                }
            } else{
                if (number2 >= number3) {
                    if (number1 >= number3) {
                     return (`${number3}   ${number1}   ${number2}`);
                    } else {
                     return (`${number1}   ${number3}   ${number2}`);
                    }
                } else {
                 return (`${number1}   ${number2}   ${number3}`);
                }
            }
         }
    } else {
        console.log(`please make sure that all parameters you had entered are numbers`) ;
        return "error";
        
    }
} 
console.log(sort(45,35,122,true));
console.log(sort(7,35,12,true));
console.log(sort(45,535,12,true));
console.log(sort(44,35,55,false));
console.log(sort(425,35,12,false));
console.log(sort(425,35,'gg',false));
/**
 * Exercise 108
Create a new index108.js file
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true
 */