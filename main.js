var chooseYourGameView = document.querySelector(".choose-your-game-view");
var classicModeView = document.querySelector(".classic-mode-view");
var difficultModeView = document.querySelector(".difficult-mode-view");

var playerSelectionsClassicModeView = document.getElementById("player-selections-view-classic");
var playerSelectionsDifficultModeView = document.getElementById("player-selections-view-difficult");

var humanToken = document.querySelector(".human-name");
var computerToken = document.querySelector(".computer-name");

var humanPlayerWinsCounter = document.querySelector(".wins-counter-classic");
var computerPlayerWinsCounter = document.querySelector(".wins-counter-difficult");

var playerSelectionsIconContainerClassic = document.getElementById("player-selections-icon-container-classic");
var playerSelectionsIconContainerDifficult = document.getElementById("player-selections-icon-container-difficult");

var winnerDisplayHeader = document.querySelector(".winner-display-header");
var winnerDisplayHeaderDifficult = document.querySelector(".winner-display-header-difficult");

var gameRulesClassic = document.querySelector(".game-rules-classic");
var gameRulesDifficult = document.querySelector(".game-rules-difficult");

var chooseYourGameBtns = document.querySelector(".choose-your-game-buttons");
var classicModeBtn = document.getElementById("classicModeBtn");
var difficultModeBtn = document.getElementById("difficultModeBtn");

var changeGameBtn = document.querySelector(".change-game-button");

var allClassicFighterBtns = document.querySelectorAll(".fighter-buttons-classic");
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");

var allDifficultFighterBtns = document.querySelectorAll(".fighter-buttons-difficult");
var rockBtnDifficult = document.getElementById("rockBtnDifficult");
var paperBtnDifficult = document.getElementById("paperBtnDifficult");
var scissorsBtnDifficult = document.getElementById("scissorsBtnDifficult");
var alienBtnDifficult = document.getElementById("alienBtnDifficult");
var ghostBtnDifficult = document.getElementById("ghostBtnDifficult");

var newGame = new Game();

var humanPlayerObjectParsed;
var computerPlayerObjectParsed;

var classicFightersSelection = ["rock", "paper", "scissors"];
var difficultFightersSelection = ["rock", "paper", "scissors", "alien", "ghost"];

classicModeBtn.addEventListener("click", function() {newGame.selectGameType("classic")});
difficultModeBtn.addEventListener("click", function() {newGame.selectGameType("difficult")});

changeGameBtn.addEventListener("click", loadChooseGameView);

rockBtnClassic.addEventListener("click", function () {
  playGame("rock");
});
paperBtnClassic.addEventListener("click", function () {
  playGame("paper");
});
scissorsBtnClassic.addEventListener("click", function () {
  playGame("scissors");
});
rockBtnDifficult.addEventListener("click", function () {
  playGame("rock");
});
paperBtnDifficult.addEventListener("click", function () {
  playGame("paper");
});
scissorsBtnDifficult.addEventListener("click", function () {
  playGame("scissors");
});
alienBtnDifficult.addEventListener("click", function () {
  playGame("alien");
});
ghostBtnDifficult.addEventListener("click", function () {
  playGame("ghost");
});

function playGame(fighter) {
  newGame.humanPlayer.takeTurn(fighter);
  if (!classicModeView.classList.contains("hidden")) {
  displayClassicPlayerSelections(classicFightersSelection);
  displayWinner();
  displayWinCounterData();
  timeGameBoardClassic();
  }
  if (!difficultModeView.classList.contains("hidden")) {
  displayDifficultPlayerSelections(difficultFightersSelection);
  displayWinnerDifficult();
  displayWinCounterData()
  timeGameBoardDifficult();
  }
};

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayClassicPlayerSelections(array) {
  hide(classicModeView);
  show(playerSelectionsClassicModeView);
  for (var i = 0; i < array.length; i++) {
    if ((array[i] === newGame.humanPlayer.selection) && (newGame.computerPlayer.selection === newGame.humanPlayer.selection)) {
      playerSelectionsIconContainerClassic.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnClassic">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">
      <button class="fighter-buttons-classic" id="${array[i]}BtnClassic">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
      console.log("THIS WORKS 1 ");
    } else if (array[i] === newGame.humanPlayer.selection || array[i] === newGame.computerPlayer.selection) {
      playerSelectionsIconContainerClassic.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnClassic">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
      console.log("THIS WORKS 1 ");
    }
  }
}

function displayDifficultPlayerSelections(array) {
  hide(difficultModeView);
  show(playerSelectionsDifficultModeView);
  for (var i = 0; i < array.length; i++) {
    if ((array[i] === newGame.humanPlayer.selection) && (newGame.computerPlayer.selection === newGame.humanPlayer.selection)) {
      playerSelectionsIconContainerDifficult.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnDifficult">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">
      <button class="fighter-buttons-classic" id="${array[i]}BtnDifficult">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    } else if (array[i] === newGame.humanPlayer.selection || array[i] === newGame.computerPlayer.selection) {
      playerSelectionsIconContainerDifficult.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnDifficult">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    }
  }
}

function displayWinner() {
  winnerDisplayHeader.innerText = newGame.checkForWinConditions();
}

function displayWinnerDifficult() {
  winnerDisplayHeaderDifficult.innerText = newGame.checkForWinConditions();
}

function displayWinCounterData() {
    if (localStorage.getItem("humanPlayerData")) {
    newGame.humanPlayer.retrieveWinsFromStorage();
    humanPlayerWinsCounter.innerText = `WINS: ${humanPlayerObjectParsed.wins}`;
    computerPlayerWinsCounter.innerText = `WINS: ${computerPlayerObjectParsed.wins}`;
    }
}

function timeGameBoardClassic() {
  setTimeout(showGameBoardAfterGameClassic, 1000);
}

function showGameBoardAfterGameClassic() {
  playerSelectionsIconContainerClassic.innerHTML = "";
  show(classicModeView);
  hide(playerSelectionsClassicModeView);
}

function timeGameBoardDifficult() {
  setTimeout(showGameBoardAfterGameDifficult, 1000);
}

function showGameBoardAfterGameDifficult() {
  playerSelectionsIconContainerDifficult.innerHTML = "";
  show(difficultModeView);
  hide(playerSelectionsDifficultModeView);
}

function loadChooseGameView() {
  hide(classicModeView);
  hide(difficultModeView);
  hide(gameRulesClassic);
  hide(gameRulesDifficult);
  show(chooseYourGameView);
}

displayWinCounterData();