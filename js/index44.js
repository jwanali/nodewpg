let text = 'HELLO';
let result ;
let textLength = text.length;
result = text.charAt(textLength-1);
textLength -=1;
result =result.concat(text.charAt(textLength-1));
textLength-=1;
result =result.concat(text.charAt(textLength-1));
textLength -=1;
result =result.concat(text.charAt(textLength-1));
textLength -=1;
result =result.concat(text.charAt(textLength-1));
result = result.toLowerCase();
console.log(`The final result is : `,result);