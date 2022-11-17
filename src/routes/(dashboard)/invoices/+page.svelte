<script lang="ts">
  import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
  import { centsToDollars, sumInvoices } from "$lib/utils/moneyHelper";
  import { onMount } from "svelte";
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import Search from "$lib/components/Search.svelte";
  import InvoiceRow from "./InvoiceRow.svelte";
  import BlankState from "./BlankState.svelte";
  import InvoiceTableHeader from "./InvoiceTableHeader.svelte";

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
  {#if $invoices.length > 0}
    <Search />
  {:else}
    <div />
  {/if}

  <!-- Invoice button -->
  <div>
    <button
      class="btn btn-primary btn-sm translate-y-0 whitespace-nowrap transition-all  hover:-translate-y-2 md:btn-md lg:btn-lg"
      >&plus; Invoice</button
    >
  </div>
</div>

<div>
  <!-- Repair Invoices-->

  {#if $invoices === null}
    Loading....
  {:else if $invoices.length <= 0}
    <BlankState />
  {:else}
    <InvoiceTableHeader className="text-primary" />
    <div class="flex flex-col-reverse">
      {#each $invoices as invoice}
        <InvoiceRow {invoice} />
      {/each}
    </div>
    <CircledAmount
      label="Total"
      amount={centsToDollars(sumInvoices($invoices))}
    />
  {/if}
</div>
