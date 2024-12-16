const suits = ["♥", "♣", "♦", "♠"];
const values = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
];

export default class Deck {
	constructor(cards = shuffleCards(newDeck())) {
		this.cards = cards;
	}
}

class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;
		if (this.suit === "♣" || this.suit === "♠") {
			this.color = "black";
		} else {
			this.color = "red";
		}
	}
	cardValue() {
		const cardSlot = document.createElement("div");
		cardSlot.innerText = this.suit;
		cardSlot.classList.add("card", this.color);
		cardSlot.dataset.value = `${this.suit} ${this.value}`;
		return cardSlot;
	}
}

function newDeck() {
	return suits.flatMap((suit) => {
		return values.map((value) => {
			return new Card(suit, value);
		});
	});
}

function shuffleCards(deck) {
	return deck.sort(() => Math.floor(Math.random() - 0.5));
}
