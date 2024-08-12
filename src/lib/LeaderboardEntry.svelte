<script lang="ts">
	export let character;
	export let i;

	function trim_realm(realm: string): string {
		let trimmed_realm = realm.replace("'", '');
		trimmed_realm = trimmed_realm.replace(' ', '');

		return trimmed_realm;
	}

	const raiderIOCharacterURL = 'https://raider.io/characters';
	const blizzardCharacterURL = 'https://worldofwarcraft.blizzard.com/fr-fr/character';
	const warcraftLogsCharacterURL = 'https://www.warcraftlogs.com/character';
</script>

<tr class="hover">
	<td>{i + 1}</td>
	<a href={`/${character.realm}/${character.name}`}>
		<td>{character.name}</td>
	</a>

	<td>
		<img
			src={`/assets/images/class_icons/${character.class.toLowerCase()}_icon.png`}
			alt="icone de classe"
			class="h-6"
		/>
	</td>

	<td>
		<ul class="flex gap-2">
			<li>
				<a href={`${raiderIOCharacterURL}/eu/${character.realm}/${character.name}`}>
					<img src="/assets/images/logo_raiderio.png" alt="logo raider io" class="h-6" />
				</a>
			</li>
			<li>
				<a href={`${blizzardCharacterURL}/eu/${trim_realm(character.realm)}/${character.name}`}>
					<img src="/assets/images/logo_wow.png" alt="logo raider io" class="h-6" />
				</a>
			</li>
			<li>
				<a href={`${warcraftLogsCharacterURL}/eu/${trim_realm(character.realm)}/${character.name}`}>
					<img src="/assets/images/logo_warcraftlogs.png" alt="logo raider io" class="h-6" />
				</a>
			</li>
		</ul>
	</td>

	<td>{character.mplusRatingRecords[0]?.rating}</td>
</tr>
