const arithmetic = {
    add: function(number1,number2) {
        if (typeof number1 ==="number" && typeof number2 === "number") {
            console.log(`The result is: ${number1 + number2}`)
        } else {
            console.log(Error,'Both parameter should be numbers');
        };
    },
    subtract: function(number1,number2) {
        if (typeof number1 ==="number" && typeof number2 === "number") {
            console.log(`The result is: ${number1 - number2}`)
        } else {
            console.log(Error,'Both parameter should be numbers');
        };
    },
    multiply: function(number1,number2) {
        if (typeof number1 ==="number" && typeof number2 === "number") {
            console.log(`The result is: ${number1 * number2}`)
        } else {
            console.log(Error,'Both parameter should be numbers');
        };
    },
    divide: function(number1,number2) {
        if (typeof number1 ==="number" && typeof number2 === "number") {
            console.log(`The result is: ${number1 / number2}`)
        } else {
            console.log(Error,'Both parameter should be numbers');
        };
    },
    remainder: function(number1,number2){
        if (typeof number1 ==="number" && typeof number2 === "number") {
            console.log(`The result is: ${number1 % number2}`)
        } else {
            console.log(Error,'Both parameter should be numbers');
        };
    },
};
arithmetic.add(2,10);
arithmetic.subtract(10,5);
arithmetic.multiply(3,100);
arithmetic.divide(40,2);
arithmetic.remainder(20,2);
arithmetic.multiply(3,'12');