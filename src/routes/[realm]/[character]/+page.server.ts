import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {

    const realm = params.realm as string;
    const character = params.character as string;

    const characterData = await prisma.character.findFirst({
        where: {
            name: character,
            realm: realm
        },
        include: {
            mplusRatingRecords: {
                orderBy: {
                    date: 'asc',
                },
            }
        }
    });

    if (!characterData) {
        error(404, `Character ${character} not found on realm ${realm}`);
    }

    return { character: characterData };

}) satisfies PageServerLoad;
