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
        return getHumanChoice();
    }
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock")
                console.log("It's a draw!");
            else if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
            else {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats rock");
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

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
        playRound(getHumanChoice(), getComputerChoice());
    if (computerScore > humanScore)
        console.log("The game ended. You lose");
    else if (humanScore > computerScore)
        console.log("The game ended. You win");
    else
        console.log("The game ended. It's a draw!")
}

playGame();