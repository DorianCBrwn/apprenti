<script>
  import { addColumn } from "$lib/stores/store";
</script>

<menu class="flex  flex-nowrap justify-end ">

  <button class="btn btn-secondary btn-small" on:click={() => addColumn()}
      >&plus Add New Column;
    </button>
    <button class="btn btn-primary btn-small">view</button>
</menu>

<div class="flex flex-nowrap w-full">

    <slot><!-- optional fallback --></slot>

</div>

<style lang="postcss">
  button{
    @apply mr-4;
  }
</style>