
<script lang="ts">
	import Button from './components/button/button.svelte';

	export let name: string;

	let test = () => {
		alert('blah');
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Button href="https://www.google.com">
		Go to Google
	</Button>
	<Button onClick={test}>
		Just a button
	</Button>

	<Button onClick={test}>
		<i class="icon-search"></i>
	</Button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>