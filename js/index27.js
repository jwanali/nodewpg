const firstNumber = 25;
const secondNumber = 9;
const addingResult = firstNumber + secondNumber;
const subtractingResult = firstNumber - secondNumber;
const multiplyingResult = firstNumber * secondNumber;
const dividingResult = firstNumber / secondNumber;
const remainderResult = firstNumber % secondNumber;
const addingResultTemplate = `I add ${firstNumber} to  ${secondNumber} and the result is ${addingResult}`;
const subtractingResultTemplate = `I subtract ${secondNumber} from ${firstNumber} and the result is ${subtractingResult}`;
const multiplyingResultTemplate = `I multiply ${firstNumber} to  ${secondNumber} and the result is ${multiplyingResult}`;
const dividingResultTemplate = `I divide ${firstNumber} on ${secondNumber} and the result is ${dividingResult}`;
const remainderResultTemplate = `The remainder of dividing ${firstNumber} on ${secondNumber} and the result is ${remainderResult}`;
console.log(addingResultTemplate);
console.log(subtractingResultTemplate);
console.log(multiplyingResultTemplate);
console.log(dividingResultTemplate);
console.log(remainderResultTemplate);