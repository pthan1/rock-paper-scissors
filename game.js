// var Player = require("./player.js");

class Game {
  trackGameData() {

  }

  selectGameType(type) {
    if (type === "classic") {
      chooseYourGameView.classList.add("hidden");
      classicModeView.classList.remove("hidden");
    }
    
    if (type === "difficult") {
      chooseYourGameView.classList.add("hidden");
      difficultModeView.classList.remove("hidden");
    }
  }

  checkForWinConditions() {

  }

  detectDraw() {

  }

  resetBoard() {
    
  }

}