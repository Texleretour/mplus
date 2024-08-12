<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<dialog id="my_modal_3" class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none">✕</button>
		</form>
		<h3 class="text-lg font-bold pb-8">Tracker un personnage</h3>
		<form method="POST" class="flex flex-col gap-4">
			<label class="input input-bordered flex items-center gap-2">
				Nom
				<input name="name" type="text" class="grow" placeholder="Putarhq"/>
			</label>

			<label class="input input-bordered flex items-center gap-2">
				Royaume
				<input name="realm" type="text" class="grow" placeholder="Rashgarroth"/>
			</label>

			<div class="flex flex-col w-full items-end gap-2">
				<p class="italic">L'ajout d'un personnage peut prendre plusieurs heures.</p>
				<div class="w-full flex justify-end items-center gap-2">
					<button class="btn btn-accent">Tracker</button>
				</div>
			</div>
		</form>
	</div>
</dialog>

<div class="p-10 flex gap-2 justify-between">
	<h1 class="text-2xl">Leaderboard</h1>

	<btn class="btn btn-accent" onclick="my_modal_3.showModal()">+ Tracker un personnage</btn>
</div>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Rank</th>
				<th>Character</th>
				<th>Rating</th>
			</tr>
		</thead>
		<tbody>
			{#each data.characters as character, i}
				<tr class="hover">
					<td>{i + 1}</td>
					<!-- <a href={`https://raider.io/characters/eu/${character.realm}/${character.name}`}> -->
					<a href={`/${character.realm}/${character.name}`}>
						<td>{character.name + '-' + character.realm}</td>
					</a>

					<td>{character.mplusRatingRecords[0]?.rating}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="p-10 flex gap-2 justify-end items-end">
	<btn class="btn btn-accent" onclick="my_modal_3.showModal()">+ Tracker un personnage</btn>
</div>
