<script lang="ts">
	let name = 'Svelte';
	let src = '/snape.png'; // 절대 경로 svelte 기본 로직 static 폴더 하위로 찾아옴
	let alt = 'turn to page 394';
	let string = `this string contains some <strong>HTML!!!</strong>`;
	// {@html string} 으로 html 을 직접 컴포넌트에 렌더링 할 수 있음 하지만 XSS 공격에 취약하기 때문에 주의

	let count = $state(0); // rune 이라 불리는 기능 $state 는 반응형 상태를 관리해줌
	let numbers = $state([1, 2, 3, 4]);
	let total = $derived(numbers.reduce((t, n) => t + n, 0)); // 재평가 rune, read-only 속성

	function increment() {
		count += 1;
	}
	function addNumber() {
		numbers[numbers.length] = numbers.length + 1;
		console.log($state.snapshot(numbers)); // state 는 반응형 proxy 임, console log 로 볼 때는 snapshot 을 통해 사용
	}
	$inspect(numbers).with(console.trace); // inspect rune 은 상태 변경을 감지해서 자동으로 log 를 남김 .with 와 함께 사용가능
	// trace 는 상태 변경이 어디서 시작했는지 경로를 모두 알려줌
</script>

<section>
	<h1>Hello {name.toUpperCase()}</h1>

	<!-- 단축 표현 가능 src={src} === {src} -->
	<img {src} {alt} />
	<p>This is paragraph</p>
	<p>{@html string}</p>
	<button onclick={increment}>Clicked {count} {count <= 1 ? 'time' : 'times'}</button>
	<p>{numbers.join(' + ')} = {total}</p>
	<button onclick={addNumber}>Add a number</button>
</section>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	section {
		border-width: 2px;
		margin-bottom: 1em;
	}

	button {
        padding: 0.5em 2em;
		background-color: rgb(86, 139, 253);
        border-radius: 1em;
	}
</style>
