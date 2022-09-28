<script>
	import '../app.postcss';
</script>

<main class="min-h-screen">
	<slot />
</main>
<footer class="text-center">
	&copy; Dorian Brown {new Date().getFullYear()}
</footer>

<style>
	:global(body) {
		min-height: 100vh;
		display: grid;
		grid-template: 1fr auto / minmax(0, 1fr);
	}
	footer {
		padding: var(--sm);
	}
</style>
