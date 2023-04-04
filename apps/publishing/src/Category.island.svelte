<script lang="ts">
	export let user_id: string;
	let promise = fetch(`http://localhost:3003/api/${user_id}/categories`).then(response => response.json()).then(json => json);
</script>

<div>
	{#await promise}
		<h4>Waiting..</h4>
	{:then categories} 
		{#each categories as category}
			<h4>{category.name}</h4>
		{/each}
	{/await}
</div>