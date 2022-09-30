<script>
	import { store } from '$lib/stores/store';
	import Column from './Column.svelte';
</script>

<section
	class="flex flex-nowrap overflow-x-auto border border-red-300 border-2 w-full justify-between"
>
	{#each $store as column, idx (column.id)}
		<section
			class="h-full min-w-sm bg-sky-700 grid grid-cols-1 content-start items-start border border-slate-400"
			id={column.id}
			{idx}
		>
			<Column {column} {idx} />
		</section>
	{/each}
</section>
