
var playerImg1 = document.querySelector('.img1');

var playerImg2 = document.querySelector('.img2');

var result = document.querySelector('.result');

var btn = document.querySelector('.btn');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
  
var randomDice1 = Math.round(getRandomArbitrary(1, 6));

var randomDice2 = Math.round(getRandomArbitrary(1, 6));

playerImg1.src='images/dice'+randomDice1+'.png';

playerImg2.src='images/dice'+randomDice2+'.png';

if (randomDice1 == randomDice2) {
    result.innerHTML = 'DRAW';
}
if(randomDice1 < randomDice2) {
    result.innerHTML = 'Player 2 wins';
}
if(randomDice1 > randomDice2) {
    result.innerHTML = 'Player 1 wins';
}


function determineWinner(dice1, dice2) {
if (dice1 == dice2) {
    return 'DRAW';
}
if (dice1 < dice2) {
    return 'Player 2 wins';
}
if (dice1 > dice2) {
    return 'Player 1 wins';
}
}
  
btn.addEventListener("click", function() {
    var randomDice1 = Math.round(getRandomArbitrary(1, 6));
    var randomDice2 = Math.round(getRandomArbitrary(1, 6));
  
    playerImg1.src = 'images/dice' + randomDice1 + '.png';
    playerImg2.src = 'images/dice' + randomDice2 + '.png';
  
    result.innerHTML = determineWinner(randomDice1, randomDice2);
});