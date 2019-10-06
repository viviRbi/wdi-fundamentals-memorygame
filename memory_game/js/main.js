cards = ["queen", "queen", "king", "king"];

cardsInPlay=[];

var cardOne = cards[0];
cardsInPlay.push("cardOne");

console.log("use flipped queen");

var cardTwo = cards[1];
cardsInPlay.push("cardOne");

console.log("use flipped king");

if (cardsInPlay.length === 2) {
	console.log("king a");
	if (cardsInPlay[0] === cardsInPlay[4] ) {
		alert("You found a match.");
	}
	else {
		alert("Sorry. Try again!");
	}
}else {
	alert("something");
}