<script lang="ts">
	import Timer from '$lib/Timer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<Timer />

<h1 class="text-2xl">Leaderboard</h1>

<div>
	{#each data.feed as character (character.id)}
		<div class="flex-column">
			<h2>{character.name}</h2>
			<p>{character.realm}</p>
			<p>{character.mplusRatingRecords[0].rating}</p>
		</div>
	{/each}
</div>
