let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
playerName1 = playerName.slice(0,12).toUpperCase().concat(playerName.slice(12,15));
teams = teams.slice(46,50);
let message1 = message.slice(12,21);
let text = message.slice(34,39);
teams = teams.charAt(0).toUpperCase().concat(teams.slice(1,5));
console.log(`${playerName1} ${message1}${teams} player${text}${teams}!!`);