<script lang="ts">
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import MoreIcon from "$lib/components/icons/MoreIcon.svelte";
  import ViewIcon from "$lib/components/icons/ViewIcon.svelte";
  import Search from "$lib/components/Search.svelte";
  import Tag from "$lib/components/Tag.svelte";
</script>

<svelte:head>
  <title>Invoices | Apprenti</title>
</svelte:head>

<div class=" mb-7 gap-y-6  md:gap-y-4 lg:mb-16 flex flex-col-reverse items-start md:flex-row md:items-center justify-between ">
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
    <h3>Company</h3>
    <h3>Amount</h3>
    <h3>Repair</h3>
    <div />
    <div />
  </div>

  <!-- Repairs -->

  <div
    class="invoice-table invoice-row items-center rounded-lg bg-base-200 py-3 lg:py-6 shadow-tableRow"
  >
    <div class="status text-lg">
      <Tag label="late" className="ml-auto lg:ml-0" />
    </div>
    <div class="dueDate text-sm lg:text-lg">9/22/22</div>
    <div class="companyName text-base lg:text-lg font-bold">Awesome Plumbing.co</div>
    <div class="amount text-right font-mono text-sm lg:text-lg font-bold">$503.12</div>
    <div class="repairDescription text-sm lg:text-lg font-bold">Sink replacement</div>
    <div class="center viewButton hidden text-sm lg:text-lg lg:block">
      <a href="#" class="hover:text-primary"><ViewIcon /></a>
    </div>
    <div class="center moreButton hidden text-sm lg:text-lg lg:block">
      <button class="hover:text-primary"><MoreIcon /></button>
    </div>
  </div>
</div>

<CircledAmount label="Total" amount="1,2405.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }

  .invoice-row {
    grid-template-areas:
      "repairDescription repairDescription"
      "companyName amount"
      "dueDate status";
  }

  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .dueDate {
    grid-area: dueDate;
  }
  .invoice-row .companyName {
    grid-area: companyName;
  }
  .invoice-row .amount {
    grid-area: amount;
  }
  .invoice-row .repairDescription {
    grid-area: repairDescription;
  }
  .invoice-row .viewButton {
    grid-area: viewButton;
  }
  .invoice-row .moreButton {
    grid-area: moreButton;
  }


  @media(min-width: 1024px) {
    .invoice-row {
      grid-template-areas: "status dueDate companyName amount repairDescription viewButton moreButton";
    }
  }

</style>
