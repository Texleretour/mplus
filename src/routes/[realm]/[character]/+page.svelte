<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import Chart from 'chart.js/auto';
	import type { PageData } from './$types';

	export let data: PageData;

	const labels = data.character.mplusRatingRecords.map((record) => {
		const month = record.date.getMonth() + 1;
		const day = record.date.getDate();
		const hour = record.date.getHours();

		const displayDate = `${month}/${day} ${hour}h`;

		return displayDate;
	});
	const ratings = data.character.mplusRatingRecords.map((record) => record.rating);

	export const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'RIO score evolution',
				fill: false,
				lineTension: 0,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(205, 130, 158)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: ratings
			}
		]
	};
</script>

<div class="p-10">
	<h1 class="text-2xl">{data.character.name + '-' + data.character.realm}</h1>
	<h2 class="text-xl">
		{'Current M+ Score : ' +
			data.character.mplusRatingRecords[data.character.mplusRatingRecords.length - 1].rating}
	</h2>
</div>

<main class="w-screen flex justify-center items-center p-10">
	<div class="w-full -translate-x-20">
		<Line data={chartData} options={{ responsive: true }} />
	</div>
</main>
