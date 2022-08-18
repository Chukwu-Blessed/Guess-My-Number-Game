'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const clickGame = document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  // when no number is entered
  if(!guessValue) {
    document.querySelector('.message').textContent = 'Not a Valid Number';

    // when the correct number is guessed
  } else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number: You have won the Game';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // when number is too high
  else if (guessValue !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guessValue > secretNumber ? 'Too High!': 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//     else if (guessValue > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }// when number is too low
//   } else if (guessValue < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function() {
  // location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// document.querySelector('.message').textContent = 'Too Low';