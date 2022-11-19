<script lang="ts">
  import Portal from "$lib/components/Portal.svelte";
  import Overlay from "$lib/components/Overlay.svelte";

  export let isVisible: boolean = false;
</script>

<svelte:window
  on:keydown={(event) => {
    if (event.key === "Escape") {
      isVisible = false;
    }
  }}
/>

{#if isVisible}
  <Portal>
    <Overlay />
    <div
      class="fixed right-0 top-0 bg-white w-3/4 h-full py-20 px-32 z-slidePanel shadow-slidePanel"
    >
      <button
        class="btn btn-circle btn-primary absolute top-5 left-7"
        on:click={() => (isVisible = false)}
      >
        X
      </button>
      <slot />
    </div>
  </Portal>
{/if}
