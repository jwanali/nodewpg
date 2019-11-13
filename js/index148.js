const superhero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70,
};
console.log(`superhero's name: ${superhero.name}`);
console.log(`superhero's secret name: ${superhero.secretName}`);
console.log(`superhero's side kick: ${superhero.sidekick}`);
console.log(`superhero's strength: ${superhero.strength}`);
console.log(`superhero's speed: ${superhero.speed}`);
superhero.speed = 80;
console.log(`superhero's speed: ${superhero.speed}`);