function getComputerChoice() {
    let randomNum = Math.random();
    let computerChoice;
    if (randomNum < 0.333)
        computerChoice = "rock";
    else if (randomNum < 0.666)
        computerChoice = "paper";
    else
        computerChoice = "scissors";
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock")
        return "rock";
    else if (humanChoice == "paper")
        return "paper";
    else if (humanChoice == "scissors")
        return "scissors";
    else {
        console.log("Invalid option. Try again");
        getHumanChoice();
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock")
            console.log("It's a draw!");
        else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else {
            console.log("Yow win! Rock beats scissors");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Yow win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice == "paper")
            console.log("It's a draw!");
        else {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (computerChoice == "paper") {
            console.log("Yow win! Scissors beats paper");
            humanScore++;
        }
        else
            console.log("It's a draw!");
    }
}