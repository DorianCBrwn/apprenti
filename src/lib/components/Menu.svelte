<script lang="ts">
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import { page } from "$app/stores";

  type Routes = {
    "/": string;
    "/invoices": string;
    "/repairs": string;
    "/account": string;
  };

  export let open = false;
  const routes: Routes = {
    "/": "Home",
    "/invoices": "Invoices",
    "/repairs": "Repairs",
    "/account": "Account",
  };
</script>

{#if open}
  <!-- content here -->
  <ul class="list-none text-2xl font-bold">
    {#each Object.keys(routes) as link, i}
      <li>
        <a
          href={link}
          class:active={$page.url.pathname === link}
          transition:fly={{ y: -15, delay: 50 * i }}>{routes[link]}</a
        >
      </li>
    {/each}
    <hr
      transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
      class="mt-2"
    />
  </ul>
{/if}

<style lang="postcss">
  nav ul li {
    @apply mb-6;
  }

  nav ul li a {
    @apply px-10 font-bold text-white hover:text-yellow-300;
  }

  nav ul li a.active {
    background: url("/default-monochrome-black.svg") left top no-repeat;
  }
</style>
