'use strict';

// all element
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
number.innerText = '?';

checkBtn.addEventListener('click', () => {
  const checkNumber = parseInt(guess.value);
  number.innerText = '?';

  if (!checkNumber) {
    message.innerText = '⛔ ️ No number!';
  } else if (checkNumber === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.innerText = randomNumber;
    message.innerText = '🎉 Correct Number!';
  } else if (checkNumber > randomNumber) {
    message.innerText = '📈 to high';
  } else if (checkNumber < randomNumber) {
    message.innerText = '📈 to low';
  }
});
again.addEventListener('click', () => {
  number.innerText = '?';
  guess.value = '';
  document.body.style.backgroundColor = '#222';
});
