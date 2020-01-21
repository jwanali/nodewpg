function getShapePerimiter(base, height) {
    if (typeof base === "number" && typeof height === "number" && base >= 0 && height >= 0) {
        if (base === height) {
            let perimeter = base * 4;
            if (perimeter > 100) {
                return (`${perimeter}: The shape is square and the perimiter is too big`);
            } else {
                return(` ${perimeter}: The shape is square and the perimiter is fine`);
            }
        } else {
            let perimeter = (base + height) * 2;
            if (perimeter > 100) {
                return (`${perimeter}: The shape is rectangle and the perimiter is too big`);
            } else {
                return(`${perimeter}: The shape is rectangle and the perimiter is fine`);
            }
        }
    } else {
        return (`please make sure that all parameters you had entered are numbers and it should be +`)
    }
}
console.log(getShapePerimiter(11,15));
console.log(getShapePerimiter(25,35));
console.log(getShapePerimiter(-11,15));
console.log(getShapePerimiter('ee',15));
console.log(getShapePerimiter(15,15));
/**
 * Exercise 113
Create a new index113.js file
Define the function getShapePerimiter that accepts 2 parameters: base and height
If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle
This function returns a number that represents the shape perimiter
Show the following output: %perimiter% is the shape perimiter
If the perimeter is bigger than 100 then show the following output: The perimiter is to big
Else show the following message: The perimiter is fine
Call this function a couple of times with different values
Test all posible cases
 */