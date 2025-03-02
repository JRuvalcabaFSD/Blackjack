export const newGame = (gameDeck, htmlElements, points) => {
	gameDeck.newDeck();
	resetGame(gameDeck, htmlElements, points);
};

export const takeCard = (gameDeck, htmlElements, points) => {
	try {
		const card = gameDeck.takeCard();
		points.addPlayerPoints(card);
		htmlElements.addPlayerCard(card);
		htmlElements.changePlayerPoints(points.playerPoints);

		if (points.playerPoints > 21) {
			console.warn('cambio de turno');
			htmlElements.changeBtnsStatus(true);
			endTurn(gameDeck, htmlElements, points);
		} else if (points.playerPoints === 21) {
			console.warn('cambio de turno');
			htmlElements.changeBtnsStatus(true);
			endTurn(gameDeck, htmlElements, points);
		}
	} catch (error) {
		alert(error);
		htmlElements.changeBtnsStatus(true);
	}
};

export const endTurn = (gameDeck, htmlElements, points) => {
	if (gameDeck.cards.length === 52) alert('Debes tomar almenos una carta');
	do {
		const card = gameDeck.takeCard();
		points.addComputerPoints(card);
		htmlElements.addComputerCard(card);
		htmlElements.changeComputerPoints(points.computerPoints);
	} while (points.computerPoints < points.playerPoints && points.playerPoints <= 21);

	htmlElements.changeBtnsStatus(true);
	points.decideWinner();
};

const resetGame = (gameDeck, htmlElements, points) => {
	gameDeck.newDeck();
	htmlElements.changeBtnsStatus(false);
	htmlElements.cleenPlayersDecks();
	points.restartPoints();
};
