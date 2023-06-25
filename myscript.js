function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 2);
    switch(choiceNumber) {
        case '0':
            return "rock";
            break;
        case '1':
            return "scissor";
            break;
        case '2':
            return "paper";
            break;

    }
}

function playRound(playerselection, computerSelection) {
    playerselection.toLowerCase();
    if (playerselection === "rock") {
        if (computerSelection === "scissor") {
            return "you win! Rock beats scissor";
        }
        else if (computerSelection === "paper") {
            return "you lose! Paper beats rock";
        }
        else {
            return "Tie! Both of you chose rock";
        }
    }
    if (playerselection === "scissor") {
        if (computerSelection === "scissor") {
            return "Tie! Both of you chose scissor";
        }
        else if (computerSelection === "paper") {
            return "you win! scissor beats paper";
        }
        else {
            return "you lose! rock beats scissor";
        }
    }
    if (playerselection === "paper") {
        if (computerSelection === "scissor") {
            return "you lose! scissor beats paper";
        }
        else if (computerSelection === "paper") {
            return "Tie! both of you chose paper";
        }
        else {
            return "you win! paper beats rock";
        }
    }
}

function game() {
    
}

//let playerselection = prompt("Please select rock, paper, or scissor");
//let computerSelection = getComputerChoice;


