import prisma from '$lib/prisma';
import { getActiveEvent } from '$lib/server/gameEventRepository';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	let characters = await prisma.character.findMany({
		include: {
			mplusRatingRecords: {
				orderBy: {
					date: 'desc'
				},
				take: 1
			}
		}
	});

	// Sort characters based on the current rating of the most recent mplusRatingRecord
	characters = characters.sort((a, b) => {
		const aRating = a.mplusRatingRecords[0]?.rating || 0;
		const bRating = b.mplusRatingRecords[0]?.rating || 0;
		return bRating - aRating;
	});

	return { characters };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const realm = data.get('realm');

		// TODO Check if the realm exists in Europ to prevent a request to RIO API
		if (name === '' || realm === '') {
			console.log('No realm or name given');
			return;
		}

		const activeEvent = await getActiveEvent();

		if (!activeEvent) {
			console.log('No active event found');
			return;
		}

		const characterData = await findCharacter(name, realm);

		if (!characterData) {
			console.log(`Could not find character: ${name}-${realm}`);
			return;
		}

		const createdCharacter = await prisma.character.create({
			data: {
				name: characterData.name,
				realm: characterData.realm,
				class: characterData.class,
				gameEvents: {
					connect: {
						id: activeEvent.id
					}
				}
			}
		});

		await prisma.mplusRatingRecord.create({
			data: {
				rating: characterData.rating,
				characterId: createdCharacter.id
			}
		});
	}
} satisfies Actions;

interface Character {
	name: string;
	realm: string;
	rating: number;
	class: string;
}

async function findCharacter(
	name: FormDataEntryValue | null,
	realm: FormDataEntryValue | null
): Promise<Character | null> {
	if (name === '' || realm === '') {
		return null;
	}

	const response = await fetch(
		`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season%3Acurrent`
	);
	const data = await response.json();

	if (data.error) {
		return null;
	}

	const character = {
		name: data.name,
		realm: data.realm,
		class: data.class,
		rating: data.mythic_plus_scores_by_season[0].scores.all
	};

	return character;
}
