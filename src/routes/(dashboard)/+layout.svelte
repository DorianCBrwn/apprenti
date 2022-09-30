<script>
	import Navbar from './../../lib/components/Navbar.svelte';
</script>

<div class="grid grid-cols-12 gap-x-16 bg-blue-100 min-h-screen">
	<Navbar />
	<section class="grid col-start-4 col-span-9 pt-10 border border-green-600 border-2 ">
		<slot><!-- optional fallback --></slot>
	</section>
</div>
