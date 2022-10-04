<script>
  import { addColumn, deleteColumn } from "$lib/stores/store";
</script>

<div class="flex flex-start w-full h-full ">
<!-- <button class="btn btn-secondary btn-small" on:click={() => addColumn()}
    >&plus Column;
  </button> -->
    <slot><!-- optional fallback --></slot>

</div>
