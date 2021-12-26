'use strict';

//declaring state variables
let scores, currentScore, activePlayer, isGamePlaying;

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

// starting conditions
init();

// Rolling dice functionality
rollButton.addEventListener('click', function () {
  if (isGamePlaying) {
    // 1. Generating a random dice roll
    let dice = getRandomDice() + 1;
    console.log(dice, 'was rolled');

    // 2. Display dice
    displayDice(false);
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      setPlayerCurrentScore(activePlayer, currentScore);
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  if (isGamePlaying) {
    // 1. Add score to active player's score
    scores[activePlayer] += currentScore;
    setPlayerScore(activePlayer, scores[activePlayer]);

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finnish the game
      isGamePlaying = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

newButton.addEventListener('click', init);

let getRandomDice = function () {
  return Math.trunc(Math.random() * 6);
};

let switchPlayer = function () {
  setPlayerCurrentScore(activePlayer, 0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

function setPlayerCurrentScore(player, score) {
  document.getElementById(`current--${player}`).textContent = score;
}

function setPlayerScore(player, score) {
  document.getElementById(`score--${player}`).textContent = score;
}

function displayDice(isDisplay) {
  if (isDisplay) {
    diceEl.classList.add('hidden');
  } else {
    diceEl.classList.remove('hidden');
  }
}

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isGamePlaying = true;

  displayDice(true);

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
