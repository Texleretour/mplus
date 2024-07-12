import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Seeding database...');

	// Create a character
	await prisma.character.create({
		data: {
			name: 'Putarhq',
			realm: 'Rashgarroth',
            faction: 'Alliance',
            class: 'Monk',
            specialization: 'Mistweaver',
            mplusRatingRecords: {
                create: {
                    rating: 2000,
                    date: new Date(),
                }
            }
		}
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
	});
