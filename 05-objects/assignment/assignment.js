/*

Card Game of War Exercise Part 2.

*/

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/


/*

Create class modelling a card. Each card should have a suit, rank and
score as well as a title. The title should be a string descriptor for 
the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your class by creating a new card, `console.log`ing it to 
make sure you're getting what you expect. You should get something like:
{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/



/*

Write a class for a deck of cards. The deck should contain a property 
`cards` that is an array of the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will 
populate the `cards` array with all 52 card posibilities, using your 
card object from above. Someone should not be able to create a new 
deck of 52 cards if the deck's `cards` array already has cards in it

*/



/*

Write a class called Player. A player should have a username that is 
a string and a hand that is an array of cards.

Instantiate two instances of your player class.

*/



/*

Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which 
stands for node package manager and installing 3rd party libraries,
perhaps to help us handle user input; the second will be on breaking 
our program into multiple files.

After that, we'll finish building out the game and you'll actually be 
able to play it!

*/
