import Character from "./Character.js";

class Game {
  constructor(player) {
    this.player = player;
    this.enemy = new Character("Dias", 200, 20);
    this.character = null;
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  start() {
    // Выводим имя и здоровье противника
    alert(
      `${this.player}, your enemy is ${this.enemy.name} with ${this.enemy.health} health, choose your character wisely.`
    );

    // Создаем строку с именами персонажей для выбора
    const characterNames = this.characters
      .map((item, id) => `${id + 1}: ${item.name}`)
      .join("\n");

    // Prompt для выбора персонажа по индексу
    const choice = prompt(`Choose your character:\n${characterNames}`);
    const chosenIndex = parseInt(choice, 10) - 1;
    // Проверка, что выбор валиден
    if (chosenIndex >= 0 && chosenIndex < this.characters.length) {
      this.character = this.characters[chosenIndex];
      alert(`You have chosen ${this.character.name}`);
    } else {
      alert("Invalid choice. Please restart the game and choose correctly.");
    }

    this.gameLoop();
  }

  gameLoop() {
    const attackButton = document.querySelector(".attack-button");

    attackButton.addEventListener("click", () => {
      this.enemy.takeDamage(this.character.attackPower);
      console.log("Player: " + this.character.health);
      console.log("Enemy: " + this.enemy.health);
    });

    alert("battle starts in 3 seconds");

    setTimeout(() => {
      const intervalID = setInterval(() => {
        if (this.character.health <= 0) {
          if (this.enemy.health <= 0) {
            this.character.levelUp();
          }
          console.log("You lost:(");
          clearInterval(intervalID);
        }
        this.enemy.attack(this.character);
        alert(`Your enemy started attacking you, attack them back!`);
      }, 2000);
    }, 3000);
  }
}

export default Game;
