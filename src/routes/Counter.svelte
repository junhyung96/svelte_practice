<script>
	import { counter } from '../lib/shared.svelte';
</script>

<button onclick={() => (counter.count += 1)}>
	clicks: {counter.count}
</button>

<style>
	button {
		padding: 0.5em 2em;
		background-color: rgb(86, 139, 253);
        color: white;
		border-radius: 1em;
	}
</style>
