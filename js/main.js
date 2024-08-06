"use strict";

let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector("#selection");
selection.addEventListener("click", selectionMade);

function selectionMade(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    checkIfWinner()
}

function checkIfWinner() {
    if (humanScore === 5) {
        displayGameOver("Game Over: You Win!");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        displayGameOver("Game Over: You Lose!");
        humanScore = 0;
        computerScore = 0;
    }
    else {
        displayGameOver("");
    }
}

function getComputerChoice() {
    const randomNumberFrom012 = Math.floor(Math.random() * 3);

    let computerChoice;
    switch (randomNumberFrom012) {
        case 0: 
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            throw new Error("randomNumberFrom012 is not 0, 1, or 2");
    }

    return computerChoice;
}

// Play Round Functions
function playRound(humanChoice, computerChoice) {
    displayChoices(humanChoice, computerChoice);

    let humanWins;
    if      (humanChoice === "rock")     humanWins = compareWithRock(humanChoice, computerChoice);
    else if (humanChoice === "paper")    humanWins = compareWithPaper(humanChoice, computerChoice);
    else if (humanChoice === "scissors") humanWins = compareWithScissors(humanChoice, computerChoice);

    if      (humanWins === 1)  humanScore++;
    else if (humanWins === -1) computerScore++;

    displayResults();
}
function compareWithRock(humanChoice, computerChoice) {
    if (computerChoice === "rock")     return roundIsDraw(computerChoice);
    if (computerChoice === "paper")    return humanLoses(humanChoice, computerChoice);
    if (computerChoice === "scissors") return humanWins(humanChoice, computerChoice);
}
function compareWithPaper(humanChoice, computerChoice) {
    if (computerChoice === "rock")     return humanWins(humanChoice, computerChoice);
    if (computerChoice === "paper")    return roundIsDraw(computerChoice);
    if (computerChoice === "scissors") return humanLoses(humanChoice, computerChoice);
}
function compareWithScissors(humanChoice, computerChoice) {
    if (computerChoice === "rock")     return humanLoses(humanChoice, computerChoice);
    if (computerChoice === "paper")    return humanWins(humanChoice, computerChoice);
    if (computerChoice === "scissors") return roundIsDraw(computerChoice);
}
function humanLoses(humanChoice, computerChoice) {
    displayWinner(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
    return -1;
}
function humanWins(humanChoice, computerChoice) {
    displayWinner(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
    return 1;
}
function roundIsDraw(choice) {
    displayWinner(`Draw! ${capitalize(choice)} ties with ${capitalize(choice)}`);
    return 0;
}
function capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1);
}

// Display Functions
function displayChoices(humanChoice, computerChoice) {
    const choices = document.querySelector("#choices");
    choices.textContent = `You: ${capitalize(humanChoice)} vs Computer: ${capitalize(computerChoice)}`;
}
function displayWinner(winnerText) {
    const winner = document.querySelector("#winner");
    winner.textContent = winnerText;
}
function displayResults() {
    const results = document.querySelector("#results");
    results.textContent = `You ${humanScore} - ${computerScore} Computer`;
}
function displayGameOver(gameOverText) {
    const gameOver = document.querySelector("#game-over");
    gameOver.textContent = gameOverText;
}