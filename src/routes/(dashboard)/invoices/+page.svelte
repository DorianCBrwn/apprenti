<script lang="ts">
  import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
  import { onMount } from "svelte";
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import Search from "$lib/components/Search.svelte";
  import InvoiceRow from "./InvoiceRow.svelte";

  onMount(() => {
    loadInvoices();

    console.log($invoices);
  });
</script>

<svelte:head>
  <title>Invoices | Apprenti</title>
</svelte:head>

<div
  class=" mb-7 gap-y-6  md:gap-y-4 lg:mb-16 flex flex-col-reverse items-start md:flex-row md:items-center justify-between "
>
  <!-- Search Field  -->
  <Search />

  <!-- Invoice button -->
  <div>
    <button
      class="btn btn-sm md:btn-md lg:btn-lg btn-primary translate-y-0  transition-all hover:-translate-y-2 whitespace-nowrap"
      >&plus; Invoice</button
    >
  </div>
</div>

<div>
  <!-- Table Header-->
  <div class=" table-header  hidden lg:grid invoice-table text-primary ">
    <h3>Status</h3>
    <h3>Date</h3>
    <h3>ID</h3>
    <h3 class="text-center">Company</h3>
    <h3>Amount</h3>
    <h3>Repair</h3>
    <div />
    <div />
  </div>

  <!-- Repairs -->
  {#each $invoices as invoice}
    <InvoiceRow {invoice} />
  {/each}
</div>
<CircledAmount label="Total" amount="1,2405.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
