import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const gameEvents = await prisma.gameEvent.findMany({
		where: {
			startDate: {
				lte: new Date()
			},
			endDate: {
				gte: new Date()
			}
		},
        orderBy: {
            endDate: 'desc'
        },
        take: 1
	});

    const gameEvent = gameEvents[0] || null; // Fallback to null if no events are found.


	return { gameEvent };
}
