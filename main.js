var chooseYourGameView = document.querySelector(".choose-your-game-view");
var classicModeView = document.querySelector(".classic-mode-view");
var difficultModeView = document.querySelector(".difficult-mode-view");

var playerSelectionsClassicModeView = document.getElementById("player-selections-view-classic");
var playerSelectionsDifficultModeView = document.getElementById("player-selections-view-difficult");

var gameRulesClassic = document.querySelector(".game-rules-classic");
var gameRulesDifficult = document.querySelector(".game-rules-difficult");

var chooseYourGameBtns = document.querySelector(".choose-your-game-buttons");
var classicModeBtn = document.getElementById("classicModeBtn");
var difficultModeBtn = document.getElementById("difficultModeBtn");

// Classic Mode Fighter Icons
var allClassicFighterBtns = document.querySelectorAll(".fighter-buttons-classic");
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");

//Difficult Mode Fighter Icons
var allDifficultFighterBtns = document.querySelectorAll(".fighter-buttons-difficult");
var rockBtnDifficult = document.getElementById("rockBtnDifficult");
var paperBtnDifficult = document.getElementById("paperBtnDifficult");
var scissorsBtnDifficult = document.getElementById("scissorsBtnDifficult");
var alienBtnDifficult = document.getElementById("alienBtnDifficult");
var ghostBtnDifficult = document.getElementById("ghostBtnDifficult");

// Instantiating Player and Game Classes on Load
var humanPlayer = new Player ("Human", "🚀");
var computerPlayer = new Player ("Computer", "👾");
var newGame = new Game();

// Parsed Player Objects
var humanPlayerObjectParsed;
var computerPlayerObjectParsed;

// Fighter arrays
var classicFightersSelection = ["rock", "paper", "scissors"];
var difficultFightersSelection = ["rock", "paper", "scissors", "alien", "ghost"];

//Event Listeners for Game Mode Selection Buttons
classicModeBtn.addEventListener("click", function() {newGame.selectGameType("classic")});
difficultModeBtn.addEventListener("click", function() {newGame.selectGameType("difficult")});

//Event Listeners for Fighter Icons
rockBtnClassic.addEventListener("click", function() {
  humanPlayer.takeTurn("rock");
});
paperBtnClassic.addEventListener("click", function() {
  humanPlayer.takeTurn("paper");
});
scissorsBtnClassic.addEventListener("click", function() {
  humanPlayer.takeTurn("scissors");
});
//Event Listeners for Difficult Icons
rockBtnDifficult.addEventListener("click", function () {
  humanPlayer.takeTurn("rock")
});
paperBtnDifficult.addEventListener("click", function () {
  humanPlayer.takeTurn("paper")
});
scissorsBtnDifficult.addEventListener("click", function () {
  humanPlayer.takeTurn("scissors")
});
alienBtnDifficult.addEventListener("click", function () {
  humanPlayer.takeTurn("alien")
});
ghostBtnDifficult.addEventListener("click", function () {
  humanPlayer.takeTurn("ghost")
});

// Show/Hide by Class THESE DON'T WORK!!!!!!!
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
    if (array[i] === humanPlayer.selection || array[i] === computerPlayer.selection) {
      playerSelectionsClassicModeView.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnClassic">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    }
    if (array[i] === humanPlayer.selection && array[i] === computerPlayer.selection) {
      playerSelectionsClassicModeView.innerHTML = `
        <h1>ROCK, PAPER, SCISSORS</h1>
        <h2>Choose Your Fighter!</h2>
        <div class="fighter-icons-container-classic"></div>`;
      playerSelectionsClassicModeView.insertAdjacentHTML("beforeend", `
        <button class="fighter-buttons-classic" id="${humanPlayer.selection}BtnClassic">
        <img class="fighter-icons-classic" src="../assets/black-and-white-${humanPlayer.selection}.png" alt="${humanPlayer.selection} fighter">
        <button class="fighter-buttons-classic" id="${computerPlayer.selection}BtnClassic">
        <img class="fighter-icons-classic" src="../assets/black-and-white-${computerPlayer.selection}.png" alt="${computerPlayer.selection} fighter">`)
    }
  }
}

function displayDifficultPlayerSelections(array) {
  hide(difficultModeView);
  show(playerSelectionsDifficultModeView);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === humanPlayer.selection || array[i] === computerPlayer.selection) {
      playerSelectionsDifficultModeView.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-difficult" id="${array[i]}BtnDifficult">
      <img class="fighter-icons-difficult" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    } 
    if (array[i] === humanPlayer.selection && array[i] === computerPlayer.selection) {
      playerSelectionsDifficultModeView.innerHTML = `
        <h1>ROCK, PAPER, SCISSORS</h1>
        <h2>Choose Your Fighter!</h2>
          <div class="fighter-icons-container-difficult"></div>`;
      playerSelectionsDifficultModeView.insertAdjacentHTML("beforeend", `
        <button class="fighter-buttons-difficult" id="${humanPlayer.selection}BtnDifficult">
        <img class="fighter-icons-difficult" src="../assets/black-and-white-${humanPlayer.selection}.png" alt="${humanPlayer.selection} fighter">
        <button class="fighter-buttons-difficult" id="${computerPlayer.selection}BtnDifficult">
        <img class="fighter-icons-difficult" src="../assets/black-and-white-${computerPlayer.selection}.png" alt="${computerPlayer.selection} fighter">`)
    }
  }
}


// function displayDifficultPlayerSelections(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === humanPlayer.selection || array[i] === computerPlayer.selection) {
//       playerSelectionsDifficultModeView.insertAdjacentHTML("beforeend", `
//     <img class="fighter-icons-difficult" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
//     }
//   }
// }