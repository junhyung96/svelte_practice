<!-- HTML 은 logic 을 표현할 수 없지만 svelte 에서는 가능함 if ~ else if ~ else 구문 예시 -->
<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<section>
	<button onclick={increment}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
	{#if count > 10}
		<p>{count} is greater than 10</p>
	{:else if count < 5}
		<p>{count} is less than 5</p>
	{:else}
		<p>{count} is between 5 and 10</p>
	{/if}
	<!-- {#...} 는 여는 블록 {/...} 닫는 블록 {:...} 지속하는 블록 -->
</section>

<style>
	button {
		padding: 0.5em 2em;
		background-color: rgb(86, 139, 253);
		border-radius: 1em;
	}
	section {
		border-width: 2px;
		margin-bottom: 1em;
	}
</style>
