<script>
  import { store } from "$lib/stores/store";
  import Card from "./Card.svelte";

  export let column;
  export let colIdx;
</script>

<article class="h-full min-h-[200px] overflow-y-auto" {colIdx}>
  {#each column.cards as card, cardIdx (card.id)}
    <section>
      <Card {colIdx} {card} {cardIdx} />
    </section>
  {/each}
</article>
