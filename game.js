// var Player = require("./player.js");

class Game {
  constructor() {
    this.humanPlayer = new Player("Human", "🚀");
    this.computerPlayer = new Player("Computer", "👾");
  }

  trackGameData(winner) {
    if (winner === "humanPlayer") {
      this.humanPlayer.wins += 1;
      this.humanPlayer.saveWinsToStorage();
    }
    if (winner === "computerPlayer") {
      this.computerPlayer.wins += 1;
      this.computerPlayer.saveWinsToStorage();
    }
  }

  selectGameType(type) {
    hide(chooseYourGameView);
    if (type === "classic") {
      show(classicModeView);
      show(gameRulesClassic)
    }
    if (type === "difficult") {
      show(difficultModeView);
      show(gameRulesDifficult);
    }
  }

  checkForWinConditions() {
    if (
      (this.humanPlayer.selection === "rock" && this.computerPlayer.selection === "scissors") ||
      (this.humanPlayer.selection === "paper" && this.computerPlayer.selection === "rock") ||
      (this.humanPlayer.selection === "scissors" && this.computerPlayer.selection === "paper") ||
      (this.humanPlayer.selection === "rock" && this.computerPlayer.selection === "ghost") ||
      (this.humanPlayer.selection === "paper" && this.computerPlayer.selection === "alien") ||
      (this.humanPlayer.selection === "scissors" && this.computerPlayer.selection === "ghost") ||
      (this.humanPlayer.selection === "alien" && this.computerPlayer.selection === "rock") ||
      (this.humanPlayer.selection === "alien" && this.computerPlayer.selection === "scissors") ||
      (this.humanPlayer.selection === "ghost" && this.computerPlayer.selection === "paper") ||
      (this.humanPlayer.selection === "ghost" && this.computerPlayer.selection === "alien")) {
        this.trackGameData("humanPlayer");
        console.log('human wins', 'human:', this.humanPlayer.selection, 'computer: ', this.computerPlayer.selection);
        return `${this.humanPlayer.name} wins!`;
    } else if (
      (this.humanPlayer.selection === "rock" && this.computerPlayer.selection === "paper") ||
      (this.humanPlayer.selection === "paper" && this.computerPlayer.selection === "scissors") ||
      (this.humanPlayer.selection === "scissors" && this.computerPlayer.selection === "rock") ||
      (this.humanPlayer.selection === "rock" && this.computerPlayer.selection === "alien") ||
      (this.humanPlayer.selection === "paper" && this.computerPlayer.selection === "ghost") ||
      (this.humanPlayer.selection === "scissors" && this.computerPlayer.selection === "alien") ||
      (this.humanPlayer.selection === "alien" && this.computerPlayer.selection === "paper") ||
      (this.humanPlayer.selection === "alien" && this.computerPlayer.selection === "ghost") ||
      (this.humanPlayer.selection === "ghost" && this.computerPlayer.selection === "rock") ||
      (this.humanPlayer.selection === "ghost" && this.computerPlayer.selection === "scissors")) {
      this.trackGameData("computerPlayer");
      console.log('Computer wins', 'human:', this.humanPlayer.selection, 'computer: ', this.computerPlayer.selection);
      return `${this.computerPlayer.name} wins!`;
    } else {
      this.detectDraw();
      return 'Draw';
    }
  }

  detectDraw() {
      console.log('draw', this.humanPlayer.selection, this.computerPlayer.selection);
      return 'Draw!';
    } 

  resetBoard() {
    
  }
}
