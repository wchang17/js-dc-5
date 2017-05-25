/*

Card Game of War Exercise Part 1.

*/



/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/

	var suits = ['hearts', 'clubs', 'spades', 'diamonds']
	var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

function createDeck(suits, ranks) {
	let combos = []

	for(let i=0; i < suits.length; i++) {
		for(let j=0; j < ranks.length; j++) {
			combos.push( ranks[j] + ' of ' + suits[i]) 
		}
	}
	return combos

}

let deckCombos = createDeck(suits, ranks)
// console.log(deckCombos)
/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/


function getRandomCard(deck) {
	let rand = Math.floor(Math.random() * deck.length)
	return deck[rand]
}

let randomCard = getRandomCard(deckCombos)
// console.log(randomCard)
/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

function dealHand(handLength = 1, deck) {
	let hand 
	if ( handLength===1) {
		hand = getRandomCard(deck)
	} else {
		hand = []
		for( let i=0; i < handLength; i++) {
			hand.push( getRandomCard( deck ) )
			}
		} 
	return hand

}
// console.log( dealHand(null, deckCombos ))
// console.log (7, deckCombos)

/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
let playerOne = []
let playerTwo = []
playerOne = dealHand ( 7, deckCombos )
playerTwo = dealHand ( 7, deckCombos )



/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

function showHand(hand) {
	console.log( 'Your Cards: ' + hand)
}
showHand( playerOne )

/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
