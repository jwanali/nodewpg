function revert(text) {
    if (typeof text === "string") {
        let reverText ='';
        for (let index = text.length-1; index >= 0; index--) {
            reverText = reverText + text.charAt(index);
        }
        return reverText;
    } else {
        return ('please enter text');
    }
}
console.log(revert("olleh"));
console.log(revert("dlrow"));
console.log(revert("derit ma I"));
console.log(revert("thgir ti ees uoy os detrever ydaerla si txet ehT"));
console.log(revert(1234));