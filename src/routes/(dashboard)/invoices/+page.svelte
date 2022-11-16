<script lang="ts">
  import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
  import { centsToDollars, sumInvoices } from "$lib/utils/moneyHelper";
  import { onMount } from "svelte";
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import Search from "$lib/components/Search.svelte";
  import InvoiceRow from "./InvoiceRow.svelte";

  onMount(() => {
    loadInvoices();
  });
</script>

<svelte:head>
  <title>Invoices | Apprenti</title>
</svelte:head>

<div
  class=" mb-7 flex  flex-col-reverse items-start justify-between gap-y-6  md:flex-row md:items-center md:gap-y-4 lg:mb-16 "
>
  <!-- Search Field  -->
  <Search />

  <!-- Invoice button -->
  <div>
    <button
      class="btn btn-primary btn-sm translate-y-0 whitespace-nowrap transition-all  hover:-translate-y-2 md:btn-md lg:btn-lg"
      >&plus; Invoice</button
    >
  </div>
</div>

<div>
  <!-- Table Header-->
  <div class=" table-header  invoice-table hidden text-primary lg:grid ">
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

  <div class="flex flex-col-reverse">
    {#each $invoices as invoice}
      <InvoiceRow {invoice} />
    {/each}
  </div>
</div>
<CircledAmount label="Total" amount={centsToDollars(sumInvoices($invoices))} />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
