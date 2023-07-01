function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    console.log(choiceNumber);
    switch(choiceNumber) {
        case 0:
            return "rock"; 
            break;
        case 1:
            return "scissor";
            break;
        case 2:
            return "paper";
            break;

    }
}



function playRound(playerselection, computerSelection) {
    playerselection.toLowerCase();
    if (playerselection === "rock") {
        if (computerSelection === "scissor") {
            playerScore += 1;
            message.textContent = "you win! Rock beats scissor";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
            }

        }
        else if (computerSelection === "paper") {
            computerScore += 1;
            message.textContent = "you lose! Paper beats rock";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
            }
        }
        else {
            message.textContent = "Tie! Both of you chose rock";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
            }
        }
    }
    if (playerselection === "scissor") {
        if (computerSelection === "scissor") {
            message.textContent = "Tie! Both of you chose scissor";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
        else if (computerSelection === "paper") {
            playerScore += 1;
            message.textContent = "you win! scissor beats paper";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
        else {
            computerScore += 1;
            message.textContent = "you lose! rock beats scissor";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
    }
    if (playerselection === "paper") {
        if (computerSelection === "scissor") {
            computerScore += 1;
            message.textContent = "you lose! scissor beats paper";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
        else if (computerSelection === "paper") {
            message.textContent = "Tie! both of you chose paper";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
        else {
            playerScore += 1;
            message.textContent = "you win! paper beats rock";
            results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
            if (playerScore === 5) {
                message.textContent = "Player Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
            if (computerScore === 5) {
                message.textContent = "Computer Wins! The game is over!";
                results.textContent = `Player: 0, Computer: 0`;
                playerScore = 0;
                computerScore = 0;
            }
        }
    }
}

/*  used in console version
function game() {
    for (i = 0; i < 4; i++) {
        let playerselection = prompt("Please select rock, paper, or scissor");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerselection,computerSelection));
    } 


}
game(); */

let playerScore = 0;
let computerScore = 0;

const message = document.querySelector('.message');
const results = document.querySelector('.results');

results.textContent = `Player: ${ playerScore }, Computer: ${ computerScore }`;
results.innerHTML = `Player: ${ playerScore }, Computer: ${ computerScore }`;

const rockbtn = document.querySelector('.rockbtn');
rockbtn.addEventListener('click', () => playRound('rock',getComputerChoice()));

const paperbtn = document.querySelector('.paperbtn');
paperbtn.addEventListener('click', () => playRound('paper',getComputerChoice()));

const scissorsbtn = document.querySelector('.scissorsbtn');
scissorsbtn.addEventListener('click', () => playRound('scissor',getComputerChoice()));


