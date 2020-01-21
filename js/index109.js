function validateUser(userName,passWord) {
    return ((userName === 'nacho' && passWord === 'Nerd1979') || (userName === 'pedro' && passWord === 'Batman0217') || (userName === 'marta' && passWord === 'Mother2312'));
}
let userName = 'nacho';
let passWord = 'Nerd1979';
if (validateUser(userName,passWord)){
    console.log(`welcome ${userName}, nice to see you.`);
} else console.log(`Please input valid credentials`);
userName = 'Jwan';
passWord = 'J1234';

if (validateUser(userName,passWord)){
    console.log(`welcome ${userName}, nice to see you.`);
} else console.log(`Please input valid credentials`);
/**
 * Exercise 109
Create a new index109.js file
Define a validateUser function that accepts the following parameters: username and password
This function returns true or false if username and password match any of the following values:
username: nacho, password: Nerd1979
username: pedro, password: Batman0217
username: marta, password: Mother2312
Show the following output if username and password belong to a user: Welcome %username%, nice to see you again
Show the following output if username and password don't belong to a user: Please input valid credentials
Try calling the validateUser with valid credentials and also with invalid ones
 */