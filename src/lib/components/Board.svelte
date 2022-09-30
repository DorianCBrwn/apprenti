<script>
	import { addColumn, deleteColumn } from '$lib/stores/store';
</script>

<button class="btn btn-secondary w-fit  p-2" on:click={() => addColumn()}>&plus; Add Column</button>
<div
	class="h-screen w-full overflow-x-auto flex flex-nowrap border border-yellow-500 border-4
"
>
	<slot><!-- optional fallback --></slot>
</div>
