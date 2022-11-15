<script>
  import ViewIcon from "$lib/components/icons/ViewIcon.svelte";
</script>

<ul class="absolute left-0 top-4 rounded-lg bg-white shadow-lg">
  <li>
    <button
      class="flex w-full gap-x-2 p-4 font-sansSerif font-bold text-primary hover:text-secondary"
    >
      <ViewIcon />
      Send
    </button>
  </li>
  <li>
    <button
      class="flex w-full gap-x-2 p-4 font-sansSerif font-bold text-primary hover:text-secondary"
    >
      <ViewIcon />
      Open
    </button>
  </li>
</ul>

<style lang="postcss">
  li {
    @apply border-b-2 border-base-300;
  }

  li:last-child {
    @apply border-b-0;
  }
</style>
