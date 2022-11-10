<script>
  import { addColumn, store } from "$lib/stores/store";
  import Column from "./Column.svelte";
</script>

<div
  class="flex-start my-8 flex w-full  flex-nowrap justify-between gap-6 rounded-lg"
>
  {#each $store as column, idx (column.id)}
    <section
      class="space-between flex max-w-full shrink flex-col  rounded-md bg-base-300 p-4 px-2 "
      id={column.id}
      {idx}
    >
      <Column {column} {idx} />
    </section>
  {/each}
</div>

<style>
</style>
