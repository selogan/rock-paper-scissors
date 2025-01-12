function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", e => playRound(e.target.id, getComputerChoice()));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", e => playRound(e.target.id, getComputerChoice()));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", e => playRound(e.target.id, getComputerChoice()));

const results = document.querySelector("#results");

const humanScoreItem = document.querySelector("#human-score");
const computerScoreItem = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        results.textContent = "It's a tie!";
        tieScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
        humanScore += 1;
        humanScoreItem.textContent = "Human Score: " + humanScore;
    } else {
        results.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!`;
        computerScore += 1;
        computerScoreItem.textContent = "Computer Score: " + computerScore;
    }

    if (humanScore == 5) {
        results.textContent = "Human is the winner!";
        resetScore();
    } else if (computerScore == 5) {
        results.textContent = "Computer is the winner!";
        resetScore();
    }
}

function capitalizeFirstLetter(choice) {
    return choice.at(0).toUpperCase() + choice.substring(1)
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    humanScoreItem.textContent = "Human Score: " + humanScore;
    computerScoreItem.textContent = "Computer Score: " + computerScore;
}