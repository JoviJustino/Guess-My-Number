'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Numero correto!😁';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let score = 5;
// document.querySelector('.number').textContent = numeroSecreto;

document.querySelector('.check').addEventListener('click', function game() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //quando não tem valor de entrada:

  if (!guess) {
    document.querySelector('.message').textContent = 'Numero invalido!';
    //quando o usuario acerta o número:
  } else if (guess === numeroSecreto) {
    document.querySelector('.message').textContent = 'parabéns! Você acertou😁';
    document.querySelector('.number').textContent = numeroSecreto;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.borderRadius = '50rem';
    //quando o numero de entrada é menor
  } else if (guess < numeroSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Numero baixo 🎲';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'fim de jogo';
      document.querySelector('.score').textContent = 0;
    }
    //quando o numero de entrada é menor
  } else if (guess > numeroSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Numero alto 🎰';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'fim de jogo';
      document.querySelector('.score').textContent = 0;
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '5';
    document.querySelector('.guess').value = '';
    ///////
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.borderRadius = '0px';
    document.querySelector('.number').textContent = '?';
  });
});
