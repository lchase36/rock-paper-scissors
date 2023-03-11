function getComputerChoice() {
    let choiceId = Math.floor(Math.random() * 3);
    switch (choiceId) {
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    let upperPlayerSelection = playerSelection.toUpperCase();
    switch(upperPlayerSelection) {
        case "ROCK":
            switch(computerSelection) {
                case "Rock": 
                    result = "You Tied";
                    break;
                case "Paper":
                    result = "You Lose! Paper beats Rock";
                    break;
                case "Scissors":
                    result = "You Win! Rock beats Scissors";
                    break;
            }
            break;
        case "PAPER":
            switch(computerSelection) {
                case "Rock": 
                    result = "You Win! Paper beats Rock";
                    break;
                case "Paper":
                    result = "You Tied";
                    break;
                case "Scissors":
                    result = "You Lose! Scissors beats Paper";
                    break;
            }
            break;
        case "SCISSORS":
            switch(computerSelection) {
                case "Rock": 
                    result = "You Lose! Rock beats Scissors";
                    break;
                case "Paper":
                    result = "You Win! Scissors beats Paper";
                    break;
                case "Scissors":
                    result = "You Tied";
                    break;
            }
            break;
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Rock, Paper, or Scissors: ");
        console.log(playRound(playerInput, getComputerChoice()));
    }
}