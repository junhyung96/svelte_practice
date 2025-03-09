<script lang="ts">
	import Counter from './Counter.svelte';
	import PackageInfo from './PackageInfo.svelte';
	import Practice from './practice.svelte';
	import Practice2 from './practice2.svelte';
	import Practice3 from './practice3.svelte';
	import Practice4 from './practice4.svelte';
	import Practice5 from './practice5.svelte';

	const pkg = {
		name: 'svelte',
		version: 5,
		description: 'blazing fast',
		website: 'https://svelte.dev'
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Practice />
<Practice2 />

<Counter />
<Practice3 answer={'42'} />
<Practice3 />
<Practice4 />
<Practice5 />

<!-- <PackageInfo name={pkg.name} version={pkg.version} description={pkg.description} website={pkg.website}/> -->
<PackageInfo {...pkg} />
<!-- spread props : pkg 의 속성들이 예상되는 하위 컴포넌트가 기대하는 props 와 일치하기에 spread해 줄 수 잇음 -->