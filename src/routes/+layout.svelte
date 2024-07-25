<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import Timer from '$lib/Timer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="m-20">
	
	<div class="flex justify-center">
		<Timer date={data.gameEvent.endDate.toString()}/>
	</div>
	
	<slot />
</main>

