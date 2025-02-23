<script lang="ts">
	let elapsed = $state(0);
	let interval = $state(1000);

	// 무언가 반응하는 것을 effect 라 부름
	// Svelte 가 상태 변경을 감지해서 DOM에 반영하는 것
	// 사용자는 자신만의 effect 를 만들 수 있음
	// react 의 useEffect 와 유사하나 자동으로 종속성을 추적하기 때문에 배열을 따로 명시할 필요없음 : chatgpt 의 설명
	// Effects 는 SSR 에서 작동하지 않음
	$effect(() => {
		const id = setInterval(() => {
			elapsed += 1;
		}, interval);

		// cleanup function
		// 상태 변경 후 함수 재실행 전에 이전 함수를 종료시킴
		// return 문을 작성하지 않는다면 speed up 실행 후 speed down 을 눌러도 적용안됨
		return () => {
			clearInterval(id);
		};
	});
</script>

<section>
	<p>예제1. 컴포넌트가 얼마나 오래 마운트된지 알아보기</p>
	<button onclick={() => (interval /= 2)}>speed up</button>
	<button onclick={() => (interval *= 2)}>speed down</button>
	<p>elapsed: {elapsed}</p>
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
