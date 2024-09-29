function getComputerChoice() {
    let randomNum = Math.random();
    let choice;
    if (randomNum < 0.333)
        choice = "rock";
    else if (randomNum < 0.666)
        choice = "paper";
    else
        choice = "scissor";
    return choice;
}

console.log(getComputerChoice());