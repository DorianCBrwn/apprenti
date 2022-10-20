<script lang="ts">
  import MoreIcon from "$lib/components/icons/MoreIcon.svelte";
  import ViewIcon from "$lib/components/icons/ViewIcon.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import { centsToDollars, sumLineItems } from "$lib/utils/moneyHelper";

  export let invoice: Invoice;
</script>

<div
  class="invoice-table invoice-row items-center rounded-lg bg-base-200 py-3 lg:py-6 shadow-tableRow"
>
  <div class="status text-lg">
    <Tag label={invoice.invoiceStatus} className="ml-auto lg:ml-0" />
  </div>
  <div class="dueDate text-sm lg:text-lg">{invoice.dueDate}</div>
  <div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
  <div
    class="companyName text-base lg:text-lg font-bold text-center whitespace-nowrap truncate"
  >
    {invoice.vendor.name}
  </div>
  <div class="amount font-mono text-sm lg:text-lg font-bold">
    ${centsToDollars(sumLineItems(invoice.lineItems))}
  </div>
  <div
    class="repairDescription text-sm lg:text-lg font-bold whitespace-nowrap truncate"
  >
    {invoice.repairDescription}
  </div>
  <div class="center viewButton hidden text-sm lg:text-lg lg:block">
    <a href="#" class="hover:text-primary"><ViewIcon /></a>
  </div>
  <div class="center moreButton hidden text-sm lg:text-lg lg:block">
    <button class="hover:text-primary"><MoreIcon /></button>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="postcss">
  .invoice-row {
    grid-template-areas:
      "invoiceNumber  repairDescription"
      "companyName amount"
      "dueDate status";
  }
  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .invoiceNumber {
    grid-area: invoiceNumber;
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

  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: "status dueDate invoiceNumber companyName amount repairDescription viewButton moreButton";
    }
  }
</style>
