'use strict';

let secreteNumber = generateSecreteNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(secreteNumber);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (secreteNumber === guess) {
    updateMessage('Correct number!');
    updateBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNumber;
    updateHighScore(score);
  } else if (guess > secreteNumber) {
    if (score > 0) {
      updateMessage('Too high!');
      updateScore(--score);
    } else {
      updateMessage('You lost the game');
    }
  } else if (guess < secreteNumber) {
    if (score > 0) {
      updateMessage('Too low!');
      updateScore(--score);
    } else {
      updateMessage('You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

function updateScore(score) {
  document.querySelector('.score').textContent = score;
}

function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}

function updateBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function generateSecreteNumber() {
  return Math.trunc(Math.random() * 20);
}

function resetGame() {
  score = 20;
  secreteNumber = generateSecreteNumber();

  updateScore(score);
  updateMessage('start guessing...');
  updateBackgroundColor('#222');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
}

function updateHighScore(score) {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
}
