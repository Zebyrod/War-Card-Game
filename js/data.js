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



// Using JS class constuctor this will create a deck of cards
// I want to use my newDeck function to get a new deck when the page is loaded

export default class Deck {     // looked up how to link js files on mdn the method used in object lab with module.export did not work. export default is used when a single value, class, function, or object is going to be imported from the file 
	constructor(cards = shuffleCards(newDeck())) {  // everytime the game starts I want this class Deck to be created which is why I set cards = newDeck function in the constructor I also want the deck to be shuffled which is why I called the shuffleCards function on the newDeck
		this.cards = cards;
	}
}

// Using JS class constructor this will create all 52 cards for my deck of cards
// I want this constructor to take the suit and values from the arrays above and create all 52 card options for me
class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;
	}
    cardColor(){
        if(this.suit === '♣' || this.suit === '♠'){
            this.color = 'black'
        } else {
            this.color = 'red'
        }
        return this.color
    }
    cardValue(){
        const cardSlot = document.createElement('div')
        cardSlot.innerText = this.suit
        cardSlot.classList.add('card', this.color)
        cardSlot.dataset.value = `${this.suit} ${this.value}` // Searched ways to store data on created elements and found .dataset on w3 schools. Also watched a youtube video on 9 DOM manipulation methods to be a master and this one was in the video. this will assign a data-value to the html of the card being pulled which will then fill in the color and the value of the card being drawn. I will then use this in app.js to append it to the empty card space created. 
        console.log(cardSlot.dataset.value);
        return cardSlot
    }
};


// This function should utilize the flatMap and map methods to combine the suits and values arrays above into one array
// Read through this function on MDN and it can be used to combine arrays into one array with all their values. Similar to the map method
function newDeck() {
	return suits.flatMap((suit) => {   // If I used map instead of flatMap I get 4 arrays of 13 cards one for each suit 
		return values.map((value) => {
			// this is now going through both arrays and taking the suit and value and putting it into one
			return new Card(suit, value); // this is going to return a new card for every suit and value combination (52 cards of a deck)
		});
	});
}
// When the game starts I want the deck to be shuffled(randomize the order)

function shuffleCards(deck){
    return deck.sort(() => Math.floor(Math.random() -0.5)) 
}

// Then I want the deck of 52 cards to be split in half and each half will be assigned to a player can use splice on the deck? Then push it into each players hand?
