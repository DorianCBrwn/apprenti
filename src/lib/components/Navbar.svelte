<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "$lib/components/Menu.svelte";
  import Logo from "$lib/components/icons/Apprenti-logo.svelte";

  let open = true;
  let width = 100;
  let height = 100;
</script>

<svelte:head>
  {#if open}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}
</svelte:head>

<!-- Mobile Nav  -->
<div class="fixed right-6 top-6 z-navBarToggle md:hidden">
  <Hamburger --color="rgb(7, 129, 190)" bind:open />
</div>

<header
  class="fixed z-navBar h-screen w-full -translate-x-full bg-base-300 text-center transition-transform md:relative md:col-span-3 md:h-full md:translate-x-0"
  class:translate-x-0={open}
>
  <div class="my-10 md:my-24
  ">
    <a href="/" class="center">
      <Logo />
    </a>
  </div>

  <nav>
    <Menu {open} />
  </nav>
</header>

<!-- <style lang="postcss"></style> -->
