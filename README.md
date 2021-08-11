# 🪨 , 📄 , ✂️ 

Mod 1 + Rock, Paper, Scissors

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
The aim of this project was to create a fully functioning and playable Rock, Paper, Scissors game.

Players can choose "Classic" or "Difficult" mode.  

Players play against a Computer.  After playing at least one game in a Mode, players can change game modes.

The player's and computer's scores are saved and are displayed on the left and right sides respectively.
## Technologies
  - JavaScript
  - HTML
  - CSS

## Code Architecture
The application consists of a single HTML page and three JavaScript files.

1. player.js contains a Player class
  - Player methods include:
    - constructor
    - saveWinsToStorage
    - retrieveWinsFromStorage
    - takeTurn

2. game.js contains a Game class
  - Player methods include:
    - constructor
    - trackGameData
    - checkForWinConditions
    - detectDraw
    - resetBoard

3. main.js contains DOM-related JavaScript


## Illustrations
Click [here](./assets/gameplay.gif) for gameplay illustration.

## Install + Setup
Open the index.html in your brower to run and play the game.

## Contributors
  - [Phil Than](https://github.com/pthan1)
  - [Jeremiah Black](https://github.com/jeremiahblackol)

## Wins
	- Developed a working CSS "casino" theme.
	- Refactoring the code to remove any DOM manipulation from classes
  - Fixing win counter
  - Fixing issue of timer not resetting when first result was a Draw

## Challenges + Improvements
	- Challenges: It was difficult to follow the suggested iterations and to create the classes first.  
  - Improvements: Next time, I will work on creating the classes first then work on the main JS file.
	- Bugs: None
	- Future Iterations:
    - Create a "Casino-like" experience by holding and showing fighter icons as cards as in a casino table game.
    - Add a "Reset Score" button to reset the score on click.


## Project Specs
The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)
