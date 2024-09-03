import Character from "./Character.js";

class Player extends Character {
    constructor(name, health, attackPower) {
        super(name, health, attackPower);
        this.level = 0;
        this.inventory = [];
    }



    levelUp() {
        this.level += 1;
        this.attackPower += 5;
        console.log(`${this.name}, upgraded level to ${this.level}
        Upgrade features: ATTACK POWER + 5`);
    }

    takeDamage(damage) {
        if (this.health > 0) {
          this.health -= damage;
        } else {
          console.log(`You died`);
        }
      }
    
}

export default Player;