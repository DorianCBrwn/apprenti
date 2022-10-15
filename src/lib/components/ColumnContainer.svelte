<script>
  import { addColumn, store } from "$lib/stores/store";
  import Column from "./Column.svelte";
</script>
<div class="flex flex-start w-full justify-between  flex-nowrap rounded-lg my-8 gap-6">

    {#each $store as column, idx (column.id)}
      <section
        class="bg-base-300 flex flex-col space-between px-2  shrink rounded-md p-4 max-w-full "
        id={column.id}
        {idx}
      >
        <Column {column} {idx} />
      </section>
    {/each}



</div>

  <style>

  </style>