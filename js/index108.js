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
        console.log(`please make sure that the number you enter are number`) ;
    }
} 
console.log(sort(45,35,122,true));
console.log(sort(7,35,12,true));
console.log(sort(45,535,12,true));
console.log(sort(44,35,55,false));
console.log(sort(425,35,12,false));