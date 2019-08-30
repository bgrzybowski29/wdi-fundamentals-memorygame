console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
function checkForMatch()
{
	cardsInPlay[0] == cardsInPlay[1] ? alert("You found a match") : alert("Sorry try again")
}
function flipCard(cardId)
{
	//var cardOne = cards[0];
	//var cardTwo = cards[2];
	cardsInPlay.push(cards[cardId]);
	//cardsInPlay.push(cardTwo);
	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId]);
}
flipCard(0);
flipCard(1);

//console.log("User flipped " + cardThree);
