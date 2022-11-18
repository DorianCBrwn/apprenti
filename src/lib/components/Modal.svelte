<script lang="ts">
  import Portal from "$lib/components/Portal.svelte";
  import Overlay from "$lib/components/Overlay.svelte";
  import Cancel from "$lib/components/icons/CancelIcon.svelte";
  import { createEventDispatcher } from "svelte";

  export let isVisible: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<svelte:window
  on:keydown={(event) => {
    if (event.key === "Escape") {
      dispatch("close");
    }
  }}
/>

{#if isVisible}
  <Portal>
    <Overlay />
    <div class=" center fixed inset-0 z-modal">
      <div
        class="relative max-w-[450px] min-h-[230px] w-full rounded-lg bg-white px-10 py-7"
      >
        <button
          on:click={() => dispatch("close")}
          class="right-4 top-4 absolute text-primary hover:text-primary-focus"
        >
          <Cancel />
        </button>
        <slot><!-- optional fallback --></slot>
      </div>
    </div>
  </Portal>
{/if}

<style>
  /* your styles go here */
</style>
