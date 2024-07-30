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