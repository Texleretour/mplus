import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let characters = await prisma.character.findMany({
		include: {
			mplusRatingRecords: {
				orderBy: {
					date: 'desc',
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
