var chooseYourGameView = document.querySelector(".choose-your-game-view");
var classicModeView = document.querySelector(".classic-mode-view");
var difficultModeView = document.querySelector(".difficult-mode-view");

var playerSelectionsClassicModeView = document.getElementById("player-selections-view-classic");
var playerSelectionsDifficultModeView = document.getElementById("player-selections-view-difficult");

var playerSelectionsIconContainerClassic = document.getElementById("player-selections-icon-container-classic");
var playerSelectionsIconContainerDifficult = document.getElementById("player-selections-icon-container-difficult");

var winnerDisplayHeader = document.querySelector(".winner-display-header");

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

// InstantiatingGame Class on Load

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

// //Event Listeners for Fighter Icons
// rockBtnClassic.addEventListener("click", function() {
//   newGame.humanPlayer.takeTurn("rock");
// });
// paperBtnClassic.addEventListener("click", function() {
//   newGame.humanPlayer.takeTurn("paper");
// });
// scissorsBtnClassic.addEventListener("click", function() {
//   newGame.humanPlayer.takeTurn("scissors");
// });
// //Event Listeners for Difficult Icons
// rockBtnDifficult.addEventListener("click", function () {
//   newGame.humanPlayer.takeTurn("rock")
// });
// paperBtnDifficult.addEventListener("click", function () {
//   newGame.humanPlayer.takeTurn("paper")
// });
// scissorsBtnDifficult.addEventListener("click", function () {
//   newGame.humanPlayer.takeTurn("scissors")
// });
// alienBtnDifficult.addEventListener("click", function () {
//   newGame.humanPlayer.takeTurn("alien")
// });
// ghostBtnDifficult.addEventListener("click", function () {
//   newGame.humanPlayer.takeTurn("ghost")
// });

//Event Listeners for Fighter Icons
rockBtnClassic.addEventListener("click", function () {
  playGame("rock");
});
paperBtnClassic.addEventListener("click", function () {
  playGame("paper");
});
scissorsBtnClassic.addEventListener("click", function () {
  playGame("scissors");
});
//Event Listeners for Difficult Icons
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
  }

  if (!difficultModeView.classList.contains("hidden")) {
  displayDifficultPlayerSelections(difficultFightersSelection);
  }

  displayWinner();
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

      
    // if (array[i] === newGame.humanPlayer.selection || array[i] === newGame.computerPlayer.selection) {
    //   playerSelectionsIconContainerClassic.insertAdjacentHTML("beforeend", `
    //   <button class="fighter-buttons-classic" id="${array[i]}BtnClassic">
    //   <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    //   console.log("THIS WORKS 1 ");
    // }
    // if (array[i] === newGame.humanPlayer.selection && array[i] === newGame.computerPlayer.selection) {
    //   playerSelectionsClassicModeView.innerHTML = `
    //   <h1>ROCK, PAPER, SCISSORS</h1>
    //   <h2 class="winner-display-header">Choose Your Fighter!</h2>
    //   <div class="fighter-icons-container-classic" id="player-selections-icon-container-classic">
    //   <button class="fighter-buttons-classic" id="${newGame.humanPlayer.selection}BtnClassic">
    //   <img class="fighter-icons-classic" src="../assets/black-and-white-${newGame.humanPlayer.selection}.png" alt="${newGame.humanPlayer.selection} fighter">
    //   <button class="fighter-buttons-classic" id="${newGame.computerPlayer.selection}BtnClassic">
    //   <img class="fighter-icons-classic" src="../assets/black-and-white-${newGame.computerPlayer.selection}.png" alt="${newGame.computerPlayer.selection} fighter"></div>`;
    // }
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
      console.log("THIS WORKS 1 ");
    } else if (array[i] === newGame.humanPlayer.selection || array[i] === newGame.computerPlayer.selection) {
      playerSelectionsIconContainerDifficult.insertAdjacentHTML("beforeend", `
      <button class="fighter-buttons-classic" id="${array[i]}BtnDifficult">
      <img class="fighter-icons-classic" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
      console.log("THIS WORKS 1 ");
    }

    // if (array[i] === newGame.humanPlayer.selection || array[i] === newGame.computerPlayer.selection) {
    //   playerSelectionsIconContainerDifficult.insertAdjacentHTML("beforeend", `
    //   <button class="fighter-buttons-difficult" id="${array[i]}BtnDifficult">
    //   <img class="fighter-icons-difficult" src="../assets/black-and-white-${array[i]}.png" alt="${array[i]} fighter">`)
    // } 
    // if (array[i] === newGame.humanPlayer.selection && array[i] === newGame.computerPlayer.selection) {
    //   playerSelectionsDifficultModeView.innerHTML = `
    //     <h1>ROCK, PAPER, SCISSORS</h1>
    //     <h2 class="winner-display-header">Choose Your Fighter!</h2>
    //     <div class="fighter-icons-container-difficult"><button class="fighter-buttons-difficult" id="${newGame.humanPlayer.selection}BtnDifficult">
    //     <img class="fighter-icons-difficult" src="../assets/black-and-white-${newGame.humanPlayer.selection}.png" alt="${newGame.humanPlayer.selection} fighter">
    //     <button class="fighter-buttons-difficult" id="${newGame.computerPlayer.selection}BtnDifficult">
    //     <img class="fighter-icons-difficult" src="../assets/black-and-white-${newGame.computerPlayer.selection}.png" alt="${newGame.computerPlayer.selection} fighter"></div>`;
    // }
  }
}

function displayWinner() {
  winnerDisplayHeader.innerText = newGame.checkForWinConditions();
}

