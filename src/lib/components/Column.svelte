<script>
  import { store, deleteColumn } from "$lib/stores/store";
  import Cards from "../../routes/(dashboard)/repairs/Cards.svelte";
  import { v4 as uuidv4 } from "uuid";
  import CloseIcon from "./icons/CloseIcon.svelte";

  export let column;
  export let idx;

  function getNewCard() {
    //TODO Add data to model
    return {
      id: uuidv4(),
      title: "Card Title",
      description: "Card Description",
    };
  }
  /**
   *
   * @param {number} idx
   */
  function addCard(idx) {
    $store[idx].cards = [getNewCard(), ...$store[idx].cards];
  }
</script>

<button class="btn btn-secondary" on:click={() => deleteColumn(column.id)}>
  <CloseIcon />
</button>
<header>
  <h2>
    <input
      bind:value={column.title}
      type="text"
      class="  input input-primary my-10 w-full py-8 text-center text-lg"
    />
  </h2>
</header>
<button
  class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
  on:click={() => addCard(idx)}>&plus; Add Card</button
>
<Cards {column} colIdx={idx} />

<!-- markup (zero or more items) goes here -->
<style>
  header h2 input {
    background: url("/wrench.svg") left no-repeat;
  }
</style>
