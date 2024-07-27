<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import Timer from '$lib/Timer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="m-20">
	<div class="flex justify-center">
		{#if data.gameEvent}
			<Timer date={data.gameEvent.endDate.toString()} />
		{:else}
			<p>Il n'y a pas d'événement en cours</p>
		{/if}
	</div>

	<slot />
</main>
