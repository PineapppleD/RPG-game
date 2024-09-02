import Character from "./Character";

class Player {
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

    
}