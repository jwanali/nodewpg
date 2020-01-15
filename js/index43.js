let text = 'game of thrones';
let firstChar =text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let result = firstChar.concat(secondChar,thirdChar);
result = result.toUpperCase();
console.log('The final result is :',result);
let t = text.charAt(150)
console.log('When the index isn\'t valid it will show:',text.charAt(150),typeof(t),t);