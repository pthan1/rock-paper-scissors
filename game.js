class Game {
  constructor() {
    this.humanPlayer = new Player("Human", "🚀");
    this.computerPlayer = new Player("Computer", "👾");
  }

  trackGameData(winner) {

    switch(winner) {
      case "humanPlayer":
        this.humanPlayer.wins += 1;
        this.humanPlayer.saveWinsToStorage();
        break;
      case "computerPlayer":
        this.computerPlayer.wins += 1;
        this.computerPlayer.saveWinsToStorage();
        break;
    }
  }

  selectGameType(type) {
    hide(chooseYourGameView);
    
    switch(type) {
      case "classic":
        show(classicModeView);
        show(gameRulesClassic);
        break;
      case "difficult":
        show(difficultModeView);
        show(gameRulesDifficult);
        break;
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
      return `${this.computerPlayer.name} wins!`;
    } else {
      this.detectDraw();
      return 'Draw!';
    }
  }

  detectDraw() {
      return 'Draw!';
    } 

  resetBoard() {
    newGame = new Game();
  }
}
