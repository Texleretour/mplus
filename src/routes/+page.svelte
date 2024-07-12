<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<h1>Welcome</h1>

<div>
	{#each data.feed as character (character.id)}
		<div>
			<h2>{character.name}</h2>
			<p>{character.realm}</p>
			<p>{character.mplusRatingRecords[0].rating}</p>
		</div>
	{/each}
</div>
