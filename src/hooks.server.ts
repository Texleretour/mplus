import RaiderIOWorker from '$lib/server/rioWorker';
import { building } from '$app/environment';

if (!building) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const raiderIOWorker = RaiderIOWorker.instance;
	console.info('RaiderIO worker started');
}
