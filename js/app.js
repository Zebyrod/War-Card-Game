import Deck from "./data.js";

const deck = new Deck()
//------- Cached Element References ------//
const computerCard = document.querySelector('.comp-card');
const computerDeckEl = document.querySelector('.comp-deck');


const playerCard = document.querySelector('.player-card');
const playerDeckEl = document.querySelector('.player-deck');

const displayText = document.querySelector('display-text');

const playButton = document.querySelector('#play');
const drawButton = document.querySelector('#draw-card')


//-------Variables--------//

let playerDeck;
let compDeck;
let inRound;
//----- Functions ------//

function startGame(){

    const deckHalf = Math.floor(deck.cards.length / 2);
    playerDeck = deck.cards.slice(0, deckHalf);
    compDeck = deck.cards.slice(deckHalf, deck.cards.length);
    inRound = false;
    cardCount();
}

function flipCards (){
    
    inRound = true;
    const playerCurrentCard = playerDeck.shift()
    const computerCurrentCard = compDeck.shift()
    
    
    playerCard.appendChild(playerCurrentCard.cardValue());
    computerCard.appendChild(computerCurrentCard.cardValue());
    
}

function clearAfterRound(){
    inRound = false;
    computerCard.innerHTML = ''
    playerCard.innerHTML = ''

    
    cardCount();
};

function cardCount() {
    computerDeckEl.innerText = compDeck.length;
    playerDeckEl.innerText = playerDeck.length;  //keep track and update the deck count
}
//------ Event Listeners --------// 

playButton.addEventListener('click', ()=>{
    startGame()
});

drawButton.addEventListener('click', ()=>{
    if (inRound === true){
        clearAfterRound()
    } else {
        flipCards()
    }
});