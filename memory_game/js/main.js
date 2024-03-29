var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png",
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",
}
];

cardsInPlay=[];


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
	alert("Sorry try again.");
}

var button = document.querySelector('button');
var img = document.getElementsByTagName('img');

button.addEventListener('click', function(){
	for (var i=0; i<cards.length; i++){
		img[i].setAttribute('src','images/back.png');
		cardsInPlay = [];
		}
	})
};


function flipCard() {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

function createBoard (){
	for (var i = 0; i < cards.length; i++) 
	{
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
	document.getElementById('game-board').appendChild(cardElement);
	cardElement.addEventListener('click', flipCard);
   	}

	
};

createBoard();


