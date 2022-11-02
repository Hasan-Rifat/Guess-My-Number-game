'use strict';

// all element
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let newScore = 20;
let newHighScore = 0;

// message function
const messageHandler = function (message) {
  document.querySelector('.message').innerText = message;
};

const randomNumber = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener('click', () => {
  const checkNumber = parseInt(guess.value);

  // empty value
  if (!checkNumber) {
    messageHandler('⛔ ️ No number!');
  }
  // current number
  else if (checkNumber === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.innerText = randomNumber;
    messageHandler('🎉 Correct Number!');

    //
    if (newHighScore < newScore) {
      newHighScore = newScore;
      highScore.innerText = newHighScore;
    }
  }
  // not equals
  else if (checkNumber !== randomNumber) {
    if (newScore > 0) {
      // score
      newScore--;
      score.innerText = newScore;

      //highscore
      highScore.innerText = newHighScore;
      checkNumber > randomNumber
        ? messageHandler('📈 to high')
        : messageHandler('📈 to low');
    }
  }
});

// again btn
again.addEventListener('click', () => {
  number.innerText = '?';
  guess.value = '';
  document.body.style.backgroundColor = '#222';
  newScore = 20;
  score.innerText = newScore;
});
