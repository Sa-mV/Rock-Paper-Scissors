function getComputerChoice() {
    let randomNum = Math.random();
    let Computerchoice;
    if (randomNum < 0.333)
        Computerchoice = "rock";
    else if (randomNum < 0.666)
        Computerchoice = "paper";
    else
        Computerchoice = "scissor";
    return Computerchoice;
}

function getHumanChoice() {
    let HumanChoice = prompt("Enter rock, paper, or scissors");
    HumanChoice = HumanChoice.toLowerCase();
    if (HumanChoice == "rock")
        return "rock";
    else if (HumanChoice == "paper")
        return "paper";
    else if (HumanChoice == "scissors")
        return "scissors";
    else {
        console.log("Invalid option. Try again");
        getHumanChoice();
    }
    return HumanChoice;
}