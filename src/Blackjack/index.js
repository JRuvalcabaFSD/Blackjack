import { Deck } from './userCases/deck.js';
import { endTurn, newGame, takeCard } from './userCases/gameFunctions.js';
import { HtmlElements } from './userCases/html-elements.js';
import { Points } from './userCases/points.js';

(() => {
	const htmlElements = new HtmlElements('#btnNuevo', '#btnPedir', '#btnDetener', '.divCartas', 'small');
	const gameDeck = new Deck();
	const points = new Points();

	htmlElements.newGameBtn.addEventListener('click', () => newGame(gameDeck, htmlElements, points));
	htmlElements.takeCardBtn.addEventListener('click', () => takeCard(gameDeck, htmlElements, points));
	htmlElements.changeTurnBtn.addEventListener('click', () => endTurn(gameDeck, htmlElements, points));
})();
