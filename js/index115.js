function getLongerText(text1, text2){
    if (typeof text1 === "string" && typeof text2 === "string") {
        if (text1.length > text2.length) {
            return(text1);
        } else if (text1.length < text2.length) {
            return(text2);
        }else {
            return(`both text "${text1}" and "${text2}" have the same length`)
        }
    } else {
        return ('please enter two texts');
    }
}
console.log(getLongerText('hello','you give us too much exercises'));
console.log(getLongerText('life is beautiful','life is difficult'));
console.log(getLongerText('hello world','I am tired'));
console.log(getLongerText('life is beautiful',1234));