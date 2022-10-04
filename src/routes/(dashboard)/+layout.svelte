<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="grid min-h-screen grid-cols-12 bg-base-100 md:gap-x-16 lg:gap-x-8">
  <Navbar />
  <main class="col-span-full px-4 pt-4  md:col-span-8 md:pt-10">
    <slot><!-- optional fallback --></slot>
  </main>
</div>
