var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: '"images/queen-of-hearts.png"',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: '"images/queen-of-diamonds.png"',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: '"images/king-of-hearts.png"',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: '"images/king-of-diamonds.png"',
}
];

cardsInPlay=[];


function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);

	console.log("use flipped "+ cards[cardId].rank);
	console.log("use flipped "+ cards[cardId].suit);
	console.log("use flipped "+ cards[cardId].cardImage);


	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1] ) {
			alert("You found a match.");
		}
		else {
			alert("Sorry. Try again!");
		}
	}else {
		return;
	}
}

flipCard(0);
flipCard(3);

