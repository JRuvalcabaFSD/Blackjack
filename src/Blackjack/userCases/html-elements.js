export class HtmlElements {
	#newGame = null;
	#takeCard = null;
	#changeTurn = null;
	#playersDecks = null;
	#labelsPoints = null;

	constructor(refNewGame, refTakeCard, refChangeTurn, refplayersDecks, refpointsLabels) {
		this.#newGame = document.querySelector(refNewGame);
		this.#takeCard = document.querySelector(refTakeCard);
		this.#changeTurn = document.querySelector(refChangeTurn);
		this.#playersDecks = document.querySelectorAll(refplayersDecks);
		this.#labelsPoints = document.querySelectorAll(refpointsLabels);
	}

	changeBtnsStatus(status) {
		this.#newGame.disabled = !status;
		this.#takeCard.disabled = status;
		this.#changeTurn.disabled = status;
	}

	addPlayerCard(card) {
		this.#createCard(0, card);
	}

	addComputerCard(card) {
		this.#createCard(1, card);
	}

	cleenPlayersDecks() {
		this.#labelsPoints.forEach((elem) => (elem.innerText = 0));
		this.#playersDecks.forEach((elem) => (elem.innerText = ''));
	}

	#createCard(player, card) {
		const imgCarta = document.createElement('img');
		imgCarta.src = `/assets/cartas/${card}.png`; //3H, JD
		imgCarta.classList.add('carta');
		this.#playersDecks[player].append(imgCarta);
	}

	changePlayerPoints(points) {
		this.#labelsPoints[0].innerText = points;
	}
	changeComputerPoints(points) {
		this.#labelsPoints[1].innerText = points;
	}

	get newGameBtn() {
		return this.#newGame;
	}
	get takeCardBtn() {
		return this.#takeCard;
	}
	get changeTurnBtn() {
		return this.#changeTurn;
	}
}
