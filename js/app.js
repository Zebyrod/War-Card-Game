import Deck from "./data.js";
//---------Constants---------//

const deck = new Deck();

const cardValue = {  // I had to add a value for each card for when a special card like A J Q K show up there is not a number value they have for comparison. So using this object when I compare cards that were drawn it will use these values for its comparison
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'10': 10,
	J: 11,
	Q: 112,
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

//----- Functions ------//

function startGame() {
	const deckHalf = Math.floor(deck.cards.length / 2);
	playerDeck = deck.cards.slice(0, deckHalf);
	compDeck = deck.cards.slice(deckHalf, deck.cards.length);
	inRound = false;
	cardCount();
}

function flipCards() {
	// I want this function to take the first card of the deck and append it to the empty card slot created.

	inRound = true;
	playerCurrentCard = playerDeck.shift();
	computerCurrentCard = compDeck.shift();

	playerCard.appendChild(playerCurrentCard.cardValue());
	computerCard.appendChild(computerCurrentCard.cardValue());

    if(roundWinner(playerCurrentCard, computerCurrentCard)){  // I want this to compare the card value and return if the round was won or lost by the player. 
        displayText.innerText = 'Win!'
        playerDeck.push(playerCurrentCard, computerCurrentCard); // After a winner for the round is determined The winner of the round should have both of the cards pushed to the bottom of their deck
    } else {
        displayText.innerText = 'Lose!'
        compDeck.push(playerCurrentCard, computerCurrentCard);
    };

    if (gameOver(playerDeck)){  // This function will return a you lost or win message once a player runs out of cards
        displayText.innerText = 'You Lost!'
    } else if(gameOver(compDeck)){
        displayText.innerText = "Congrats! You Win!"
    }
};

function clearAfterRound() {
	// after the cards have been flipped, I want this function to then clear the cards being displayed before the next round
	inRound = false;
	computerCard.innerHTML = "";
	playerCard.innerHTML = "";
	displayText.innerText = "";

	cardCount();
}

function cardCount() {
	computerDeckEl.innerText = compDeck.length;
	playerDeckEl.innerText = playerDeck.length; //keep track and update the amount of cards in the deck as the game progresses
}

function roundWinner(playerCurrentCard, computerCurrentCard) {  // I created this function to use the cardValue object above to compare the values of the cards drawn in a round and check if the player has a higher value
    return cardValue[playerCurrentCard.value] > cardValue[computerCurrentCard.value]
}

function gameOver(deck){
    return deck.length === 0
};
//------ Event Listeners --------//

playButton.addEventListener("click", () => {
	startGame();
});

drawButton.addEventListener("click", () => {
	// With this event listener I want to use my draw card button to toggle between the clearAfterRound function and flipCards function
	if (inRound === true) {
		clearAfterRound();
	} else {
		flipCards();
	}
});
