const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage) {
        this.energy = this.energy - damage;
        if (this.energy <= 0) {
            if (this.lives <= 0) {
                console.log(`Sorry ${this.name} Game Over`);
            } else {
                this.energy = 100;
                player.loseLife();
            } 
        }
    },
    recoverEnergy: function(energyUp) {
        this.energy = this.energy + energyUp;
        if (this.energy > 100) {
            this.energy = 100;
            player.recoverLife();
            if (this.lives > 99) {
                console.log(`Congradulation ${this.name} you are the winner :)`);
            }
        }

    },
    loseLife: function() {
        this.lives = this.lives - 1;
    },
    recoverLife: function() {
        this.lives = this.lives + 1;
    },
};
player.name = 'Gladiator';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();
console.log(`The ${player.name} has ${player.energy} energy  and  ${player.lives} lifes`);
player.loseLife();
player.loseLife();
player.loseEnergy(75);
player.loseEnergy(50);