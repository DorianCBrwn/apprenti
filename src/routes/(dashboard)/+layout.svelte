<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="grid min-h-screen grid-cols-12 gap-x-16 bg-base-100">
  <Navbar />
  <main class="col-span-8 pt-10">
    <slot><!-- optional fallback --></slot>
  </main>
</div>
