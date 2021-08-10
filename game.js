// var Player = require("./player.js");

class Game {
  trackGameData(winner) {
    if (winner === "humanPlayer") {
      humanPlayer.wins += 1;
    }

    if (winner === "computerPlayer") {
      computerPlayer.wins += 1;
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
    if (humanPlayer.selection === "rock" && computerPlayer.selection === "paper") {
      this.trackGameData("computerPlayer");
    } else if (humanPlayer.selection === "rock" && computerPlayer.selection === "scissors") {
      this.trackGameData("humanPlayer");
    } else if (humanPlayer.selection === "paper" && computerPlayer.selection === "rock") {
      this.trackGameData("humanPlayer");
    } else if (humanPlayer.selection === "paper" && computerPlayer.selection === "scissors") {
      this.trackGameData("computerPlayer");
    } else if (humanPlayer.selection === "scissors" && computerPlayer.selection === "rock") {
      this.trackGameData("computerPlayer");
    } else if (humanPlayer.selection === "scissors" && computerPlayer.selection === "paper") {
      this.trackGameData("humanPlayer");
    } else {
        this.detectDraw();
    }
  }

  detectDraw() {
    if (humanPlayer.selection === computerPlayer.selection) {
      // console.log('draw', humanPlayer.selection, computerPlayer.selection);
      return 'Draw!';
    } else {
      return;
    }
  }

  resetBoard() {
    
  }

}