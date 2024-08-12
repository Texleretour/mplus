<script lang="ts">
	import LeaderboardEntry from '$lib/LeaderboardEntry.svelte';
	import TrackCharacterButton from '$lib/TrackCharacterButton.svelte';
	import TrackCharacterModal from '$lib/TrackCharacterModal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<dialog id="my_modal_3" class="modal">
	<TrackCharacterModal />
</dialog>

<div class="p-10 flex gap-2 justify-between">
	<h1 class="text-2xl">Leaderboard</h1>

	<TrackCharacterButton />
</div>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>Rank</th>
				<th>Character</th>
				<th>Class</th>
				<th>Links</th>
				<th>Rating</th>
			</tr>
		</thead>
		<tbody>
			{#each data.characters as character, i}
				<LeaderboardEntry {character} {i} />
			{/each}
		</tbody>
	</table>
</div>

<div class="p-10 flex gap-2 justify-end items-end">
	<TrackCharacterButton />
</div>
