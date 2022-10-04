<script>
  import { store } from "$lib/stores/store";
  import Column from "./Column.svelte";
</script>
<div class="flex flex-start h-full w-full flex-nowrap my-8">

    {#each $store as column, idx (column.id)}
      <section
        class="grid grid-cols-4  grid-flow-row auto-rows-fr h-full  content-start items-start border border-slate-400 bg-neutral"
        id={column.id}
        {idx}
      >
        <Column {column} {idx} />
      </section>
    {/each}
</div>

  <!-- class="flex w-full flex-nowrap justify-between overflow-x-auto border border-2 border-red-300" -->