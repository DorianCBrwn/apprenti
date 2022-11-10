<script>
  import { addColumn } from "$lib/stores/store";
</script>

<menu class="flex  flex-nowrap justify-end ">
  <button class="btn-small btn btn-secondary" on:click={() => addColumn()}
    >&plus Add New Column;
  </button>
  <button class="btn-small btn btn-primary">view</button>
</menu>

<div class="flex w-full flex-nowrap">
  <slot><!-- optional fallback --></slot>
</div>

<style lang="postcss">
  button {
    @apply mr-4;
  }
</style>
