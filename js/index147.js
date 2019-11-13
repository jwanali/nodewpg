const user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!'
};
function shouldOpenBatCave (userObject) {
    return (userObject.username ==='batman' && userObject.password === 'Alfred1960KPO!')
};
if (shouldOpenBatCave(user)) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again..');
};