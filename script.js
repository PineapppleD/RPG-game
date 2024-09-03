import Game from "./classes/Game.js";
import Player from "./classes/Player.js";

function start() {
    const name = prompt('Hello, what is your name?', 'Player');
    return name;
}

const playerName = start();
console.log(playerName)
const game = new Game(playerName);
const warrior = new Player('Warrior', '160', 50);
const mar = new Player('Mar', '100', '50');
const archer = new Player('Archer', '100', '70');
game.addCharacter(warrior);
game.addCharacter(mar);
game.addCharacter(archer);

game.start();
