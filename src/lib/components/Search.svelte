<script lang="ts">
  import SearchIcon from "$lib/components/icons/Search-icon.svelte";
</script>

<!-- Search Field  -->
<div class="relative flex w-full items-baseline">
  <div class="mr-2 ">
    <SearchIcon />
  </div>

  <input
    type="text"
    placeholder="Search"
    class="w-72  border-b-2 border-dashed border-slate-300
         bg-transparent text-xl text-black outline-none focus:border-solid focus:border-b-blue-400"
  />

  <button class="btn btn-ghost">Search</button>
</div>
