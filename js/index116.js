function getHexaColor(color) {
    switch (color) {
        case 'white':
            return (`The Hexa code for ${color} is: #FFFFFF`);
            break;
        case 'black':
            return (`The Hexa code for ${color} is: #000000`);
            break;
        case 'blue':
            return (`The Hexa code for ${color} is: #0b24fb`);
            break;
        case 'green':
            return (`The Hexa code for ${color} is: #0e7e12`);
            break;
        case 'yellow':
            return (`The Hexa code for ${color} is: #fffd38`);
            break;
        case 'pink':
            return(`The Hexa code for ${color} is: #fec1cc`);
            break;
        default:
                return('please enter an easy color :)')
    }
}
console.log(getHexaColor('yellow'));
console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('pink'));
console.log(getHexaColor('green'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('gray'));
/**
 * Exercise 116
Create a new index116.js file
Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output
 */