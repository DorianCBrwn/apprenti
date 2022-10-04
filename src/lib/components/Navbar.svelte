<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "$lib/components/Menu.svelte";
  import Logo from "$lib/components/icons/Apprenti-logo.svelte";

  let open = true;
  let width = 100;
  let height = 100;
</script>

<!-- Mobile Nav  -->
<div class="fixed right-6 top-6 md:hidden">
  <Hamburger --color="rgb(7, 129, 190)" bind:open />
</div>

<header
  class="absolute h-screen w-full  -translate-x-full bg-base-300 text-center md:relative md:col-span-3 md:translate-x-0"
>
  <div class="my-10">
    <a href="/">
      <Logo {width} {height} />
    </a>
  </div>

  <nav>
    <Menu {open} />
  </nav>
</header>

<!-- <style lang="postcss"></style> -->
