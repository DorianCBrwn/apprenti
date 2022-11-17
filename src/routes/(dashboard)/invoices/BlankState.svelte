<script>
  import BlankTable from "$lib/components/BlankTable.svelte";
  import InvoiceTableHeader from "./InvoiceTableHeader.svelte";
</script>

<div>
  <div class="-mt-8 md:-mt-6 lg:-mt-14">
    <h2
      class="pt-12 mb-10 pl-24 md:pr-28 md:pl-0 font-handwriting text-2xl md:text-4xl text-secondary font-medium bg-left bg-arrowLeftUp md:bg-arrowRightUp bg-no-repeat md:bg-right text-left md:text-right"
    >
      Add your first Invoice
    </h2>
  </div>
  <InvoiceTableHeader className="text-neutral-content" />
  <BlankTable />
  <BlankTable />
  <BlankTable />
</div>
