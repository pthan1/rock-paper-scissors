var chooseYourGameView = document.querySelector(".choose-your-game-view");
var classicModeView = document.querySelector(".classic-mode-view");
var difficultModeView = document.querySelector(".difficult-mode-view");

var chooseYourGameBtns = document.querySelector(".choose-your-game-buttons");
var classicModeBtn = document.getElementById("classicModeBtn");
var difficultModeBtn = document.getElementById("difficultModeBtn");

// Classic Mode Fighter Icons
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");

// Instantiating Player and Game Classes on (Load?)
var humanPlayer = new Player ("Human", "🚀");
var computerPlayer = new Player ("Computer", "👾");
var newGame = new Game();

//Event Listeners for Game Mode Selection Buttons
// chooseYourGameBtns.addEventListener("click", newGame.selectGameType);
classicModeBtn.addEventListener("click", function() {newGame.selectGameType("classic")});
difficultModeBtn.addEventListener("click", function() {newGame.selectGameType("difficult")});

//Event Listeners for Fighter Icons
// rockBtnClassic.addEventListener("click", takeTurn);
// paperBtnClassic = addEventListener("click", takeTurn);
// paperBtnClassic = addEventListener("click", takeTurn);


// Show/Hide by Class THESE DON'T WORK!!!!!!!
function show(element) {
  element.classList.add("hidden");
}

function hide(element) {
  element.classList.remove("hidden");
}
