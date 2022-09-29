<script>
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import Logo from '$lib/components/icons/apprenti-logo.svelte'

	/**
	 * @param {boolean} open
	 */
	let open;
</script>

<!-- Mobile Nav  -->
<div class="fixed right-6 top-6">
	<Hamburger --color="rgb(7, 129, 190)" bind:open />
</div>

<header class="col-span-3 text-center bg-slate-500">
	<div class="my-10">
		<a href="/">
			<Logo />
		</a>
	</div>

	<nav>
		<ul class="list-none text-2xl font-bold">
			<li>
				<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			</li>
			<li>
				<a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a>
			</li>
			<li>
				<a href="/repairs" class:active={$page.url.pathname === '/repairs'}>Repairs</a>
			</li>
			<li>
				<a href="/account" class:active={$page.url.pathname === '/account'}>Account</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	nav ul li {
		@apply mb-6;
	}

	nav ul li a {
		@apply font-bold text-white hover:text-yellow-300 px-10;
	}

	nav ul li a.active {
		background: url('/default-monochrome-black.svg') left top no-repeat;
	}
</style>
