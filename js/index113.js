function getShapePerimiter(base, height) {
    if (typeof base === "number" && typeof height === "number" && base >= 0 && height >= 0) {
        if (base === height) {
            let perimeter = base * 4;
            if (perimeter > 100) {
                return (perimeter , `The shape is square and the perimiter is too big`);
            } else {
                return(perimeter,`The shape is square and the perimiter is fine`);
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
        return (`pleas enter number and it should be +`)
    }
}
console.log(getShapePerimiter(11,15));
console.log(getShapePerimiter(25,35));
console.log(getShapePerimiter(-11,15));
console.log(getShapePerimiter('ee',15));