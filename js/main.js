"use strict";

// Repeat 5 rounds, where each round does the following:
// - INPUT: Set humanChoice via prompting the user for rock, paper, or scissors
// - Set computerChoice by randomly assigning rock, paper, or scissors
// - Compare humanChoice with computerChoice and decide outcome of game
// - Alter scores (humanScore and computerScore) depending on outcome of game
// - OUTPUT: Log to console the winner of the round
// OUTPUT: Compare humanScore and computerScore to announce the winner by logging to the console

// (- INPUT: Set humanChoice via prompting the user for rock, paper, or scissors):
// INPUT: none
// Ask the user for their choice
// Put their input into a variable
// Standardize the input to "rock", "paper", "scissors"; allowing "RoCk" for example
// Check for input error and ask again if incorrect (not rock, paper, scissors)
// OUTPUT: humanChoice (from rock, paper, or scissors)
function getHumanChoice() {
    let humanChoice;
    let keepAsking = true;
    while (keepAsking) {
        humanChoice = prompt("Please choose rock, paper, or scissors", "rock");
        if (humanChoice !== null) {
            humanChoice = humanChoice.toLowerCase();
            if      (humanChoice === "rock")     keepAsking = false;
            else if (humanChoice === "paper")    keepAsking = false;
            else if (humanChoice === "scissors") keepAsking = false;
        }
    }
    return humanChoice;
}

// (- Set computerChoice by randomly assigning rock, paper, or scissors):
// INPUT: none
// Pick a random number between 0 and 2 inclusive
// Assign rock, paper, scissors by:
// - rock = 0
// - paper = 1
// - scissors = 2
// OUTPUT: computerChoice (from rock, paper, or scissors)
function getComputerChoice() {
    // Math.random() picks a number from 0 (included) to 1 (not included)
    // Math.floor() rounds down to the nearest integer
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

// Test function for playRound(); manually check each computer choice and human choice
function getComputerChoiceTest() {
    return getHumanChoice();
}

// (- Compare humanChoice with computerChoice and decide outcome of game
//  - Alter scores (humanScore and computerScore) depending on outcome of game):
// GLOBAL/INOUT: humanScore, computerScore
// INPUT: humanChoice, computerChoice
// If humanChoice is rock then compare to computerChoice:
// - If computerChoice = scissors then log "human wins" and increment humanScore
// - If computerChoice = paper then log "computer wins" and increment computerScore
// - If computerChoice = rock then log "it is a tie" and nothing happens to the scores
// If humanChoice is paper then compare to computerChoice: similar to above
// If humanChoice is scissors then compare to computerChoice: similar to above
// OUTPUT: none (winner declared in console)
function playRound(humanChoice, computerChoice) {
    if      (humanChoice === "rock")     compareWithRock(humanChoice, computerChoice);
    else if (humanChoice === "paper")    compareWithPaper(humanChoice, computerChoice);
    else if (humanChoice === "scissors") compareWithScissors(humanChoice, computerChoice);

    // Log Score
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
}
function compareWithRock(humanChoice, computerChoice) {
    if      (computerChoice === "rock")     roundIsDraw(computerChoice);
    else if (computerChoice === "paper")    humanLoses(humanChoice, computerChoice);
    else if (computerChoice === "scissors") humanWins(humanChoice, computerChoice);
}
function compareWithPaper(humanChoice, computerChoice) {
    if      (computerChoice === "rock")     humanWins(humanChoice, computerChoice);
    else if (computerChoice === "paper")    roundIsDraw(computerChoice);
    else if (computerChoice === "scissors") humanLoses(humanChoice, computerChoice);
}
function compareWithScissors(humanChoice, computerChoice) {
    if      (computerChoice === "rock")     humanLoses(humanChoice, computerChoice);
    else if (computerChoice === "paper")    humanWins(humanChoice, computerChoice);
    else if (computerChoice === "scissors") roundIsDraw(computerChoice);
}
// When log winner, need it in the format "You lose! Paper beats Rock"
// Need a winner message, loser message, and draw message with the choices (capitalized) put in
function humanLoses(humanChoice, computerChoice) {
    console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
    computerScore++;
}
function humanWins(humanChoice, computerChoice) {
    console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
    humanScore++;
}
function roundIsDraw(choice) {
    console.log(`Draw! ${capitalize(choice)} ties with ${capitalize(choice)}`);
}
function capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1);
}

// GLOBAL
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);