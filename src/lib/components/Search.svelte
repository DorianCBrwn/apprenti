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
    class="w-full border-b-2 border-dashed  border-slate-300 bg-transparent text-base
         text-black outline-none focus:border-solid focus:border-b-blue-400 md:w-[14rem] lg:w-72 lg:text-xl"
  />

  <button class="btn btn-ghost btn-sm md:btn-md lg:btn-lg ">Search</button>
</div>
