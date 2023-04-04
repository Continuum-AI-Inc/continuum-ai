<script lang="ts">
	import { get } from "../../API";
	import SvelteMarkdown from "svelte-markdown";


	const public_id = (new URLSearchParams(window.location.search)).get("id");

	const promise = get("http://localhost:3003/api/story/" + public_id);
</script>

<div>
 {#await promise}
	
 {:then {success, data}} 
	{#if success}
		<div class="title-header">
			<h1>{data.title}</h1>
			<p>{data.gist}</p>
		</div>
		<img src={data.cover} alt="" class="cover-image">
		<SvelteMarkdown source={data.content || ""}></SvelteMarkdown>
	{/if}
 {/await}
</div>

<style lang="scss">
	.title-header {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 24px;

		& h1 {
			color: #333;
			font-size: 44px;
		}

		& p {
			color: #666;
			font-size: 24px;
			line-height: 28px;
		}
	}

	.cover-image {
		width: 100%;
		height: auto;
		border-radius: 16px;
		max-height: 600px;
	}
</style>