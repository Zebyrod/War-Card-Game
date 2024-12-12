import Deck from "./data.js";

const deck = new Deck();

//------- Cached Element References ------//
const computerCard = document.querySelector('.comp-card')

const playerCard = document.querySelector('.player-card')

const buttons = document.querySelectorAll('button');

computerCard.appendChild(deck.cards[0].cardValue());
//----- Functions ------//




//------ Event Listeners --------// 
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        console.log('You clicked me!')
    })
});