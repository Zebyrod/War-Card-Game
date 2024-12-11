const SUITS = ['♥', '♣', '♦', '♠'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// I want to try and use flatMap method to generate the deck of cards. 
// To do this I will create 2 separate arrays one for suits and one for the values 
// I will also need to use class contructor which is a method that creates and initializes objects created within a class


   // Using JS class constuctor this will create a deck of cards 
   // I want to use my newDeck function to get a new deck when a deck is created?

class Deck {
    constructor(cards = newDeck()) {                
        this.cards = cards
    }
};

// Using JS class constructor this will create all 52 cards for my deck of cards
// I want this constructor to take the suit and values from the arrays above and create all 52 card options for me
class Card {
    constructor(suit, value) {
        this.suit = suit 
        this.value = value
    }
};

// This function should utilize the flatMap and map methods to combine the SUITS and VALUES arrays above into one array

function newDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        });
    });
};
// When the game starts I want the deck to be shuffled(randomize the order)

// Then I want the deck of 52 cards to be split in half and each half will be assigned to a player

module.exports = Deck;