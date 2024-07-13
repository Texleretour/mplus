import prisma from '$lib/prisma';
import type { Character, GameEvent } from '@prisma/client';

export async function getAllCharactersForEvent(gameEvent: GameEvent): Promise<Character[]> {
    const characters = await prisma.character.findMany({
        where: {
            gameEvents: {
                some: {
                    id: gameEvent.id
                }
            }
        }
    });

    return characters;
}

