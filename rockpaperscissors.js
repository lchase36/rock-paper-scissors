const buttons = document.querySelectorAll('button');
const playerScoreElem = document.querySelector('#player-score');
const computerScoreElem = document.querySelector('#computer-score');
const resultRound = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;
let choices = [ {choice: 'Rock', id: 0},
                        {choice: 'Paper', id: 1},
                        {choice: 'Scissors', id: 2}];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function checkScore() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            resultRound.textContent = 'Congatulations! You win the game!';
        } else {
        resultRound.textContent = 'Dang! You lost the game!';
    }
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
        });
    };
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = parseInt(this.value);
    let playerChoiceName = choices[playerChoice].choice;
    let playerWinChoices = ['02', '10', '21'];
    let result = `${playerChoice}${computerChoice.id}`;
    console.log(result);
    if (playerChoice === computerChoice.id) {
        resultRound.textContent = "You Tied"
    } else if (playerWinChoices.includes(result)) {
        playerScoreElem.textContent = ++playerScore;
        resultRound.textContent = `You win! ${playerChoiceName} beats ${computerChoice.choice}`;
    } else {
        computerScoreElem.textContent = ++computerScore;
        resultRound.textContent = `You lose! ${computerChoice.choice} beats ${playerChoiceName}`;
    };
    checkScore();
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
    });