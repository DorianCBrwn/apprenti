<script lang="ts">
  import MoreIcon from "$lib/components/icons/MoreIcon.svelte";
  import ViewIcon from "$lib/components/icons/ViewIcon.svelte";
  import TrashIcon from "$lib/components/icons/TrashIcon.svelte";
  import SendIcon from "$lib/components/icons/SendIcon.svelte";
  import EditIcon from "$lib/components/icons/EditIcon.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import { centsToDollars, sumLineItems } from "$lib/utils/moneyHelper";
  import { formatDate, isLate } from "$lib/utils/dateHelpers";
  import AdditionalOptions from "$lib/components/AdditionalOptions.svelte";

  export let invoice: Invoice;

  const handleDelete = () => {
    console.log("handle deleting");
  };

  const handleEdit = () => {
    console.log("handle editing");
  };

  const handleSend = () => {
    console.log("handle send");
  };

  const getInvoiceLabel = () => {
    if (invoice.invoiceStatus === "draft") {
      return "draft";
    } else if (invoice.invoiceStatus === "sent" && !isLate(invoice.dueDate)) {
      isOptionDisabled = true;
      return "sent";
    } else if (invoice.invoiceStatus === "late" && isLate(invoice.dueDate)) {
      isOptionDisabled = true;
      return "late";
    } else if (invoice.invoiceStatus === "paid") {
      isOptionDisabled = true;
      return "paid";
    }
  };

  let isAdditionalOptionsShowing = false;
  let isOptionDisabled = false;
</script>

<div
  class="invoice-table invoice-row items-center rounded-lg bg-base-200 py-3 shadow-tableRow lg:py-6"
>
  <div class="status text-lg">
    <Tag label={getInvoiceLabel()} className="ml-auto lg:ml-0" />
  </div>
  <div class="dueDate text-sm lg:text-lg">{formatDate(invoice.dueDate)}</div>
  <div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
  <div
    class="companyName truncate whitespace-nowrap text-center text-base font-bold lg:text-lg"
  >
    {invoice.vendor.name}
  </div>
  <div class="amount font-mono text-sm font-bold lg:text-lg">
    ${centsToDollars(sumLineItems(invoice.lineItems))}
  </div>
  <div
    class="repairDescription truncate whitespace-nowrap text-sm font-bold lg:text-lg"
  >
    {invoice.repairDescription}
  </div>
  <div class="center viewButton hidden text-sm lg:flex lg:text-lg">
    <a href="#" class="hover:text-primary"><ViewIcon /></a>
  </div>
  <div class="relative center moreButton hidden text-sm lg:flex lg:text-lg">
    <button
      class="hover:text-primary"
      on:click={() => {
        console.log("Button Clicked");

        isAdditionalOptionsShowing = !isAdditionalOptionsShowing;
      }}><MoreIcon /></button
    >

    {#if isAdditionalOptionsShowing}
      <AdditionalOptions
        options={[
          {
            label: "Edit",
            icon: EditIcon,
            disabled: isOptionDisabled,
            onClick: handleEdit,
          },
          {
            label: "Delete",
            icon: TrashIcon,
            disabled: false,
            onClick: handleDelete,
          },
          {
            label: "Send",
            icon: SendIcon,
            disabled: isOptionDisabled,
            onClick: handleSend,
          },
        ]}
      />
    {/if}
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
