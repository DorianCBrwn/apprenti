<script lang="ts">
	import CircledAmount from './../../../lib/components/CircledAmount.svelte';
  import MoreIcon from "$lib/components/icons/MoreIcon.svelte";
  import ViewIcon from "$lib/components/icons/ViewIcon.svelte";
  import Search from "$lib/components/Search.svelte";
  import Tag from "$lib/components/Tag.svelte";
</script>

<svelte:head>
  <title>Invoices | Apprenti</title>
</svelte:head>

<div class="mb-16 flex items-center justify-between px-2">
  <!-- Search Field  -->
  <Search />

  <!-- Invoice button -->
  <div>
    <button
      class="btn btn-primary translate-y-0  transition-all hover:-translate-y-2"
      >&plus; Invoice</button
    >
  </div>
</div>

<div>
  <!-- Table Header-->
  <div class=" table-header invoice-table text-primary ">
    <h3>Status</h3>
    <h3>Date</h3>
    <h3>Company</h3>
    <h3>Ammount</h3>
    <div />
    <div />
  </div>

  <!-- Repairs -->

  <div
    class="invoice-table items-center rounded-lg bg-base-200  py-6 shadow-tableRow"
  >
    <div class="text-lg"><Tag label="draft" /></div>
    <div class="text-lg">date</div>
    <div class="text-lg font-bold">company</div>
    <div class="font-mono text-lg font-bold">$503.12</div>
    <div class="center text-lg">
      <a href="#" class="hover:text-primary"><ViewIcon /></a>
    </div>
    <div class="center text-lg">
      <button class="hover:text-primary"><MoreIcon /></button>
    </div>
  </div>
</div>

 <CircledAmount label='Total' amount='1,2405.00'/>

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
