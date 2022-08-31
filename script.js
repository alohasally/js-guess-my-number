'use strict';

const secrectNumber = Math.floor(Math.random()*20) + 1;


 function guessNumber(){
    const guessValue = Number(document.querySelector('.guess').value);
    console.log(guessValue, typeof guessValue);
   // const message = document.querySelector('.message');

    if(!guessValue) {
        document.querySelector('.message').textContent = `⛔️ No number`;
    } else if(guessValue === secrectNumber) {
        document.querySelector('.message').textContent = `🎉 Coreect number`;
    } else if (guessValue > secrectNumber){
        document.querySelector('.message').textContent = `📈 too high!`;
    }  else if (guessValue < secrectNumber){
        document.querySelector('.message').textContent = `📉 Too low`;
    }
   
 }

document.querySelector('.number').textContent = secrectNumber;
document.querySelector('.check').addEventListener('click', guessNumber);