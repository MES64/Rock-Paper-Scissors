"use strict";

// Repeat 5 rounds, where each round does the following:
// - INPUT: Set userChoice via prompting the user for rock, paper, or scissors
// - Set computerChoice by randomly assigning rock, paper, or scissors
// - Compare userChoice with computerChoice and decide outcome of game
// - Alter scores (userScore and computerScore) depending on outcome of game
// - OUTPUT: Log to console the winner of the round
// OUTPUT: Compare userScore and computerScore to announce the winner by logging to the console

// - Set computerChoice by randomly assigning rock, paper, or scissors:
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