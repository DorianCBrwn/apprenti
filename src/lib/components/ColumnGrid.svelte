<script>
  import { store } from "$lib/stores/store";
  import Column from "./Column.svelte";
</script>

<section
  class="flex w-full flex-nowrap justify-between overflow-x-auto border border-2 border-red-300"
>
  {#each $store as column, idx (column.id)}
    <section
      class="min-w-sm grid h-full grid-cols-1 content-start items-start border border-slate-400 bg-sky-700"
      id={column.id}
      {idx}
    >
      <Column {column} {idx} />
    </section>
  {/each}
</section>
