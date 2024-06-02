let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
}*/

function playGame(playerMove){
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'Scissors'){
  if (computerMove === 'Scissors') {
    result = 'Tie.';
  } else if (computerMove === 'Rock') {
    result = 'You Lose.';
  } else if (computerMove === 'Paper') {
    result = 'You Win.';
  }
}else if (playerMove === 'Paper'){
  if (computerMove === 'Paper') {
    result = 'Tie.';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose.';
  } else if (computerMove === 'Rock') {
    result = 'You Win.';
  }
}else if (playerMove === 'Rock'){
  if (computerMove === 'Rock') {
    result = 'Tie.';
  } else if (computerMove === 'Paper') {
    result = 'You Lose.';
  } else if (computerMove === 'Scissors') {
    result = 'You Win.';
  }
}

if (result === 'You Win.') {
  score.wins += 1;
} else if (result === 'You Lose.') {
  score.losses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

console.log(score);

console.log(computerMove);
console.log(result);

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `
  You 
    <img src="./${playerMove}-emoji.png" alt="${playerMove}-emoji" class="move-icon">
    <img src="./${computerMove}-emoji.png" alt="${computerMove}-emoji" class="move-icon">
   Computer`;

/*
  alert(`
You picked ${playerMove}, Computer picked ${computerMove}. ${result}\n
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} 
`);*/
}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {
let computerMove = '';

const randamNumber = Math.random();

if (randamNumber >= 0 && randamNumber < 1 / 3) {
  computerMove = 'Rock';
} else if (randamNumber >= 1 / 3 && randamNumber < 2 / 3) {
  computerMove = 'Paper';
} else if (randamNumber >= 2 / 3 && randamNumber < 1) {
  computerMove = 'Scissors';
}
return computerMove;
}