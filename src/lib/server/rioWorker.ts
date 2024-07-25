import { getAllCharactersForEvent } from './characterRepository';
import { getActiveEvent } from './gameEventRepository';
import prisma from '$lib/prisma';
import type { Character } from '@prisma/client';

export default class RaiderIOWorker {
	static #instance: RaiderIOWorker;
	private static TIME_INTERVAL = 12 * 60 * 60 * 1000;

	private constructor() {
		this.startWorker();
	}

	public static get instance(): RaiderIOWorker {
		if (!RaiderIOWorker.#instance) {
			RaiderIOWorker.#instance = new RaiderIOWorker();
		}

		return RaiderIOWorker.#instance;
	}

	private async UpdateRaiderIOScoresForAllCharacters() {
		console.info("Updating RaiderIO scores for all characters");
		const activeEvent = await getActiveEvent();

		if (!activeEvent) {
			console.error('No active event found');
			return;
		}

		const characters = await getAllCharactersForEvent(activeEvent);

		for (const character of characters) {
			const ioScore = await this.fetchRaiderIOScore(character);

			// Save ioScore to DB
			await prisma.mplusRatingRecord.create({
				data: {
					rating: ioScore,
					characterId: character.id
				}
			});
		}
	}

	private async fetchRaiderIOScore(character: Character): Promise<number> {
		const response = await fetch(
			`https://raider.io/api/v1/characters/profile?region=eu&realm=${character.realm}&name=${character.name}&fields=mythic_plus_scores_by_season%3Acurrent`
		);
		const data = await response.json();
		return data.mythic_plus_scores_by_season[0].scores.all;
	}

	private startWorker(): void {
		this.UpdateRaiderIOScoresForAllCharacters();

		setInterval(() => {
			this.UpdateRaiderIOScoresForAllCharacters();
		}, RaiderIOWorker.TIME_INTERVAL);
	}
}
