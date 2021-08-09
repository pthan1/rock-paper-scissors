// var Player = require("./player.js");

class Game {
  trackGameData() {

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

  }

  detectDraw() {

  }

  resetBoard() {
    
  }

}