<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="grid min-h-screen grid-flow-col bg-base-100 md:gap-x-16 lg:gap-x-8">
  <Navbar />
  <main class="col-span-full px-16 pt-4  md:col-span-8 md:pt-10">
    <slot><!-- optional fallback --></slot>
  </main>
</div>
