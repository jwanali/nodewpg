const user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!'
};
console.log(user.username);
console.log(user.password);
console.log('===============')
user.username = user.username.toUpperCase();
user.password = user.password.slice(0,6).concat(` ${user.password.substr(10,17)}`);
console.log(user.username);
console.log(user.password);
const person = {
    name: 'Nico',
    age: 38
  };
  
  console.log(person.name);
  console.log(person.age);
  console.log(person);