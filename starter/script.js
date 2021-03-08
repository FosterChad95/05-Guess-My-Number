'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '😢 No Number!';

    //WHEN PLAYER WINS
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WHEN GUESS IS TOO HIGH
  } else if (guess > number && score > 1) {
    document.querySelector('.message').textContent = '📈Too High !';
    score--;
    document.querySelector('.score').textContent = score;
    //WHEN GUESS IS TOO LOW
  } else if (guess < number && score > 1) {
    document.querySelector('.message').textContent = '📉Too Low!';
    score--;
    document.querySelector('.score').textContent = score;

    //WHEN PLAYER LOSES GAME
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
