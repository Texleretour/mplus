import prisma from '$lib/prisma';
import type { GameEvent } from '@prisma/client';

export async function getActiveEvent(): Promise<GameEvent | null> {
	const activeEvent = await prisma.gameEvent.findFirst({
		where: {
			endDate: {
				gte: new Date()
			}
		}
	});

	return activeEvent;
}
