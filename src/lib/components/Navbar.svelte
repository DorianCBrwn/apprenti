<script>
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/components/Menu.svelte';
	import { fly } from 'svelte/transition';
	import Logo from '$lib/components/icons/apprenti-logo.svelte';

	let open = false;
</script>

<!-- Mobile Nav  -->
<div class="fixed right-6 top-6 md:hidden" >
	<Hamburger --color="rgb(7, 129, 190)" bind:open />
</div>

<header
	class="absolute w-full h-screen  md:relative md:col-span-3 text-center bg-slate-500 -translate-x-full md:translate-x-0"
>
	<div class="my-10">
		<a href="/">
			<Logo />
		</a>
	</div>

	<nav>
		<Menu {open} />
	</nav>
</header>

<style lang="postcss"></style>
