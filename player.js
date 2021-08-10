class Player {
  constructor(name, token) {
  this.name = name;
  this.token = token;
  this.wins = 0;
  this.selection = "";
  }

  saveWinsToStorage() {
    var stringifiedHumanObject = JSON.stringify(newGame.humanPlayer);
    var stringifiedComputerObject = JSON.stringify(newGame.computerPlayer);
    localStorage.setItem("humanPlayerData", stringifiedHumanObject);
    localStorage.setItem("computerPlayerData", stringifiedComputerObject);
    this.retrieveWinsFromStorage();
  }

  retrieveWinsFromStorage() {
    var humanPlayerObjectNotParsed = localStorage.getItem("humanPlayerData");
    var computerPlayerObjectNotParsed = localStorage.getItem("computerPlayerData");
    humanPlayerObjectParsed = JSON.parse(humanPlayerObjectNotParsed);
    computerPlayerObjectParsed = JSON.parse(computerPlayerObjectNotParsed);
  }
  
  takeTurn(fighterSelection) {
    this.selection = fighterSelection;
    if (!classicModeView.classList.contains("hidden")) {
      newGame.computerPlayer.selection = classicFightersSelection[getRandomIndex(classicFightersSelection)];
      displayClassicPlayerSelections(classicFightersSelection);
      console.log('classic Mode');
    }
    if (!difficultModeView.classList.contains("hidden")) {
      newGame.computerPlayer.selection = difficultFightersSelection[getRandomIndex(difficultFightersSelection)];
      displayDifficultPlayerSelections(difficultFightersSelection);
      console.log('this works');
    }
    newGame.checkForWinConditions();
  }
}