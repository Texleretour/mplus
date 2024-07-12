import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.character.findMany({
		include: {
			mplusRatingRecords: true
		}
	});
	return {
		feed: response
	};
}) satisfies PageServerLoad;
