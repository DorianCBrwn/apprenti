<script>
	import Navbar from './../../lib/components/Navbar.svelte';
</script>

<div class="grid grid-cols-12 gap-x-16 bg-blue-100 min-h-screen">
	<Navbar />
	<main class="col-span-8 pt-10"><slot><!-- optional fallback --></slot></main>
</div>
