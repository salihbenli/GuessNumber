'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '🛑No Number';
    } else if (guess == randomNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = randomNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess != randomNumber) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? '📈Too high!' : '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💣You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(randomNumber);
});
