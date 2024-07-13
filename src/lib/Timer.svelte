<script>
    let targetDate = new Date('2024-12-12T00:00:00').getTime();
    let currentDate = new Date().getTime();

    let timeLeft = targetDate - currentDate;

    function updateTime() {
        currentDate = new Date().getTime();
        timeLeft = targetDate - currentDate;
    }

    setInterval(updateTime, 1000);

    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
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
