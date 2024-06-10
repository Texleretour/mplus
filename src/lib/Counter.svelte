<script>
    let count = 0

    function increment() {
        count += 1
    }

</script>

<button on:click={increment} class="btn btn-primary">
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>