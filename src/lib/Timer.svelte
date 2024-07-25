<script lang="ts">
	export let date: string;

    let targetDate = new Date(date).getTime();
    let currentDate = new Date().getTime();
    let timeLeft = targetDate - currentDate;

    let daysLeft: Number, hoursLeft: Number, minutesLeft: Number, secondsLeft: Number;

    function updateTime() {
        currentDate = new Date().getTime();
        timeLeft = targetDate - currentDate;

        daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }

    setInterval(updateTime, 1000);
</script>

<div class="flex gap-5">
	<div>
		<span class="countdown font-mono text-4xl">
			<span style="--value:{daysLeft};"></span>
		</span>
		days
	</div>
	<div>
		<span class="countdown font-mono text-4xl">
			<span style="--value:{hoursLeft};"></span>
		</span>
		hours
	</div>
	<div>
		<span class="countdown font-mono text-4xl">
			<span style="--value:{minutesLeft};"></span>
		</span>
		min
	</div>
	<div>
		<span class="countdown font-mono text-4xl">
			<span style="--value:{secondsLeft};"></span>
		</span>
		sec
	</div>
</div>
