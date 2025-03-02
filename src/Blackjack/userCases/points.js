export class Points {
	#playersPoints = [0, 0];

	constructor() {}

	restartPoints() {
		this.#playersPoints = [0, 0];
	}

	addPlayerPoints(card) {
		this.#addPoints(0, card);
	}
	addComputerPoints(card) {
		this.#addPoints(1, card);
	}

	decideWinner() {
		setTimeout(() => {
			if (this.#playersPoints[1] === this.#playersPoints[0]) {
				alert('Nadie gana :(');
			} else if (this.#playersPoints[0] > 21) {
				alert('Computadora gana');
			} else if (this.#playersPoints[1] > 21) {
				alert('Jugador Gana');
			} else {
				alert('Computadora Gana');
			}
		}, 500);
	}

	#addPoints(player, card) {
		const valor = card.substring(0, card.length - 1);
		const points = isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
		this.#playersPoints[player] = this.#playersPoints[player] + points;
	}
	get playerPoints() {
		return this.#playersPoints[0];
	}
	get computerPoints() {
		return this.#playersPoints[1];
	}
}
