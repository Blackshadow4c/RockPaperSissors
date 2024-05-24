const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    //console.log(computerChoice);

    if(playerChoice === computerChoice){
        result = 'ITS A TIE';
    }
    else{
        switch(playerChoice){
            case 'rock': result = (computerChoice === 'scissors') ? 'Your Win': 'You Lose';break;
            case 'paper': result = (computerChoice === 'rock') ? 'Your Win': 'You Lose';break;
            case 'scissors': result = (computerChoice === 'paper') ? 'Your Win': 'You Lose';break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch(result){
        case 'Your Win' : resultDisplay.classList.add('greenText');
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
        case 'You Lose' : resultDisplay.classList.add('redText');
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
}