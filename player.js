class Player {
  constructor(name, token) {
  this.name = name;
  this.token = token;
  this.wins = 0;
  this.selection = "";
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
  
  takeTurn(fighterSelection) {
    this.selection = fighterSelection;
    computerPlayer.selection = classicFightersSelection[getRandomIndex(classicFightersSelection)];
  }

}