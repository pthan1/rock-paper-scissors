// var Player = require("./player.js");

class Game {
  trackGameData(winner) {
    if (winner === "humanPlayer") {
      humanPlayer.wins += 1;
      humanPlayer.saveWinsToStorage();
    }
    if (winner === "computerPlayer") {
      computerPlayer.wins += 1;
      computerPlayer.saveWinsToStorage();
    }
  }

  selectGameType(type) {
    hide(chooseYourGameView);
    if (type === "classic") {
      show(classicModeView);
    }
    if (type === "difficult") {
      show(difficultModeView);
    }
  }

  checkForWinConditions() {
    if (
      (humanPlayer.selection === "rock" && computerPlayer.selection === "scissors") ||
      (humanPlayer.selection === "paper" && computerPlayer.selection === "rock") ||
      (humanPlayer.selection === "scissors" && computerPlayer.selection === "paper") ||
      (humanPlayer.selection === "rock" && computerPlayer.selection === "ghost") ||
      (humanPlayer.selection === "paper" && computerPlayer.selection === "alien") ||
      (humanPlayer.selection === "scissors" && computerPlayer.selection === "ghost") ||
      (humanPlayer.selection === "alien" && computerPlayer.selection === "rock") ||
      (humanPlayer.selection === "alien" && computerPlayer.selection === "scissors") ||
      (humanPlayer.selection === "ghost" && computerPlayer.selection === "paper") ||
      (humanPlayer.selection === "ghost" && computerPlayer.selection === "alien")) {
      this.trackGameData("humanPlayer");
      console.log('human wins', 'human:', humanPlayer.selection, 'computer: ', computerPlayer.selection);
    } else if (
      (humanPlayer.selection === "rock" && computerPlayer.selection === "paper") ||
      (humanPlayer.selection === "paper" && computerPlayer.selection === "scissors") ||
      (humanPlayer.selection === "scissors" && computerPlayer.selection === "rock") ||
      (humanPlayer.selection === "rock" && computerPlayer.selection === "alien") ||
      (humanPlayer.selection === "paper" && computerPlayer.selection === "ghost") ||
      (humanPlayer.selection === "scissors" && computerPlayer.selection === "alien") ||
      (humanPlayer.selection === "alien" && computerPlayer.selection === "paper") ||
      (humanPlayer.selection === "alien" && computerPlayer.selection === "ghost") ||
      (humanPlayer.selection === "ghost" && computerPlayer.selection === "rock") ||
      (humanPlayer.selection === "ghost" && computerPlayer.selection === "scissors")) {
      this.trackGameData("computerPlayer");
      console.log('Computer wins', 'human:', humanPlayer.selection, 'computer: ', computerPlayer.selection);
    } else {
      this.detectDraw();
    }
  }


  detectDraw() {
      console.log('draw', humanPlayer.selection, computerPlayer.selection);
      return 'Draw!';
    } 
  
  resetBoard() {
    
  }
}
