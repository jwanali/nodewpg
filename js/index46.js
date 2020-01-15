let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11,5);
console.log(`The user ${username} has ${password} as password`);
/*
Create a new index46.js file
Define a userAndPassword variable and assign the following value: 'pepito2017,12345'
Define a username variable and use the substr method to only get the username from the userAndPassword variable (pepito2017)
Define a password variable and use the substr method to only get the password from the userAndPassword variable (12345)
Show the following output: The user %username% has %password% as password
 */