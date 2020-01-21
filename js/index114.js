function revert(text) {
    if (typeof text === "string") {
        let reverText ='';
        for (let index = text.length-1; index >= 0; index--) {
            reverText = reverText + text.charAt(index);
        }
        return reverText;
    } else {
        return ('please make sure that you had entered a string');
    }
}
console.log(revert("olleh"));
console.log(revert("dlrow"));
console.log(revert("derit ma I"));
console.log(revert("thgir ti ees uoy os detrever ydaerla si txet ehT"));
console.log(revert('1234'));
console.log(revert(1234));
/**
 * Exercise 114
Create a new index114.js file
Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :)
 */