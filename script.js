'use strict';

let secrectNumber = Math.floor(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

 function guessNumber(){
    let guessValue = Number(document.querySelector('.guess').value);
    console.log(guessValue, typeof guessValue);
   
    // When there is no input
    if(!guessValue) {
        // document.querySelector('.message').textContent = '⛔️ No number';
        displayMessage('⛔️ No number');

        // When player wins
    } else if(guessValue === secrectNumber) {
        displayMessage('🎉 Coreect number');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = '#fd66af';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if( guessValue !== secrectNumber){
        if(score > 1 ){
            displayMessage(guessValue > secrectNumber ? `📈 too high!` : `📉 Too low`); 
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥You lost the game!');
                document.querySelector('.score').textContent = 0;    
            }
    }  
 }     
       
    //     // When guess is too high
    // } else if (guessValue > secrectNumber){
    //     if(score > 1 ){
    //     document.querySelector('.message').textContent = `📈 too high!`;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = `💥You lost the game!`;
    //         document.querySelector('.score').textContent = 0;    
    //     }
    //     // When guess is too low
    // }  else if (guessValue < secrectNumber){
    //     if(score > 1 ){
    //         document.querySelector('.message').textContent = `📉 Too low`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = `💥You lost the game!`;
    //             document.querySelector('.score').textContent = 0;    
    //         }
    //     }
    // }


    function resetGame(){
        score = 20;
        secrectNumber = Math.floor(Math.random()*20) + 1;

        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }

    document.querySelector('.check').addEventListener('click', guessNumber);
    document.querySelector('.again').addEventListener('click', resetGame);
