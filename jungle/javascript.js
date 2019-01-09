window.onload=function(){
	document.getElementById("my_audio").play().catch(function() {
			// do something
			document.getElementById("my_audio").play()
  });
}

$(document).ready(function() {
  setTimeout(function() {
    $('#game').show() }, 10000);
  })

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter=0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  counter++;
  console.log(counter);
  if (counter==6){
    var audio = document.getElementById("bravo")
    audio.play();
    refresh();
  }
  resetBoard();
}

function refresh() {

  setTimeout(function () {
      location.reload()
  }, 5000);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));



function animal(num){
	var audio = document.getElementById("animal"+num.toString())
	audio.play();
}

function stop(num){
	var thissound=document.getElementById("animal"+num.toString());
	thissound.pause();
	thissound.currentTime = 0;
}