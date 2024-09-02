"use strict";
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(target) {
    target.takeDamage(this.attackPower);
  }

  takeDamage(damage) {
    if (this.health > 0) {
      this.health -= damage;
    } else {
      console.log(`${this.name} is already dead`);
    }
  }
}

export default Character;
