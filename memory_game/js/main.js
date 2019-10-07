cards = ["queen", "queen", "king", "king"];

cardsInPlay=[];


function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);

	console.log("use flipped king");

	if (cardsInPlay.length === 2) {
	console.log("king a");
		if (cardsInPlay[0] === cardsInPlay[1] ) {
			alert("You found a match.");
		}
		else {
			alert("Sorry. Try again!");
		}
	}else {
	alert("something");
	}
}

flipCard(2);