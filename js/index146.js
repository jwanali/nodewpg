const user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!'
};
function shouldOpenBatCave (username,password) {
    return (username ==='batman' && password === 'Alfred1960KPO!')
};
if (shouldOpenBatCave(user.username, user.password)) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again..');
};