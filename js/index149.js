const user = {
    firstName: 'Jwan',
    lastName: 'Ali',
    age: 41,
    married: true,
    favoriteMovies: ['turtle can fly','Incredibles 2','Ready Player One','Mission: Impossible - Fallout','four minutes','Half Moon','The Lord of the Rings','The Legend of 1900','yol "the way"','Bohemian Rhapsody'],
};

user.address = 'Okland ave';
user.addressNumber = 220;
user.phone = 4315570032;
user.friends = ['yuriy','simon','abdi','chris','nico','vruttik'];
user.job = {
    hasAJob: true,
    weeklyHours: 40,
    salary: 35,
    position:'manager assistant',
};
console.log(user);
console.log(`user's job position: ${user.job.position}`);
console.log(`user's job weekly hours: ${user.job.weeklyHours}`);