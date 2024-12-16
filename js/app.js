import Deck from "./data.js";
//---------Constants---------//

const deck = new Deck();

const cardValue = {
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	J: 11,
	Q: 12,
	K: 13,
	A: 14,
};
//------- Cached Element References ------//
const computerCard = document.querySelector(".comp-card");
const computerDeckEl = document.querySelector(".comp-deck");

const playerCard = document.querySelector(".player-card");
const playerDeckEl = document.querySelector(".player-deck");

const displayText = document.querySelector(".display-text");

const playButton = document.querySelector("#play");
const drawButton = document.querySelector("#draw-card");

//-------Variables--------//

let playerDeck;
let compDeck;
let inRound;
let playerCurrentCard;
let computerCurrentCard;


let playerSum;
let computerSum;

//----- Functions ------//

function startGame() {
	const deckHalf = Math.floor(deck.cards.length / 2);
	playerDeck = deck.cards.slice(0, deckHalf);
	compDeck = deck.cards.slice(deckHalf, deck.cards.length);
	inRound = false;
    playButton.innerText = 'Play'
	cardCount();
}

function flipCards() {
	inRound = true;
	playerCurrentCard = playerDeck.shift();
	computerCurrentCard = compDeck.shift();

	playerCard.appendChild(playerCurrentCard.cardValue());
	computerCard.appendChild(computerCurrentCard.cardValue());

	if (roundWinner(playerCurrentCard, computerCurrentCard)) {
        displayText.innerText = "Won Round!";
		playerDeck.push(playerCurrentCard, computerCurrentCard);
	} else {
        displayText.innerText = "Lost Round!";
		compDeck.push(playerCurrentCard, computerCurrentCard);
	}
    
    if (playerCurrentCard.value === computerCurrentCard.value){
        declareWar()
    };

	if (gameOver(playerDeck)) {
		displayText.innerText = "You Lost!";
	} else if (gameOver(compDeck)) {
		displayText.innerText = "You Win!";
	}
	playButton.innerText = "Restart";
}

function clearAfterRound() {
	inRound = false;
	computerCard.innerHTML = "";
	playerCard.innerHTML = "";
	displayText.innerText = "";
    
	cardCount();
}

function cardCount() {
	computerDeckEl.innerText = compDeck.length;
	playerDeckEl.innerText = playerDeck.length;
}

function roundWinner(playerCurrentCard, computerCurrentCard) {
	return (
		cardValue[playerCurrentCard.value] > cardValue[computerCurrentCard.value]
	);
}

function gameOver(deck) {
	return deck.length === 0;
}
function declareWar(){

    const playerWarCards = [
        playerDeck.shift(),
        playerDeck.shift(),
        playerDeck.shift()
    ];

    const computerWarCards = [
        compDeck.shift(),
        compDeck.shift(),
        compDeck.shift()
    ];

    playerSum = playerWarCards.reduce((acc, cardValue) => acc + cardValue, 0);

    computerSum = computerWarCards.reduce((acc, cardValue) => acc + cardValue, 0);
    if (playerSum > computerSum){
        displayText.innerText = 'Won Battle!'
        playerDeck.push(...computerWarCards, ...playerWarCards)
    } else {
        displayText.innerText = 'Lost Battle!'
        compDeck.push(...computerWarCards, ...playerWarCards)
    } 
    computerWarCards.length = 0;
    playerWarCards.length = 0;
};
       
        
//------ Event Listeners --------//

playButton.addEventListener("click", () => {
	startGame();
});

drawButton.addEventListener("click", () => {
	if (inRound === true) {
		clearAfterRound();
	} else {
		flipCards();
	}
});

// ---------GraveYard Code-------//



