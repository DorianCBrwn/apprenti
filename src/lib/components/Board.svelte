<script>
  import { addColumn, deleteColumn } from "$lib/stores/store";
</script>

<button class="btn btn-secondary w-fit  p-2" on:click={() => addColumn()}
  >&plus;
</button>
<div
  class="flex h-screen w-full flex-nowrap overflow-x-auto border border-4 border-yellow-500
"
>
  <slot><!-- optional fallback --></slot>
</div>
