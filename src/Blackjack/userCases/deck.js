import { shuffle } from 'underscore';

export class Deck {
	#cards = [];
	#regularCards = ['C', 'D', 'H', 'S'];
	#especialCards = ['A', 'J', 'Q', 'K'];

	constructor() {}
	newDeck() {
		for (let i = 2; i <= 10; i++) {
			for (const type of this.#regularCards) {
				this.#cards.push(i + type);
			}
		}
		for (const type of this.#regularCards) {
			for (const especial of this.#especialCards) {
				this.#cards.push(especial + type);
			}
		}
		this.#cards = shuffle(this.#cards);
	}

	takeCard() {
		if (this.#cards.length - 1 === 0) throw new Error('Deck is emply');
		return this.#cards.pop();
	}

	get cards() {
		return this.#cards;
	}
}
