<script lang="ts">
	let { answer = 'a mystery' } = $props();
	// props rune 을 통해 부모에서 자식 컴포넌트로 data 전달
    // default value 설정 가능
</script>

<p>The answer is {answer}</p>
