<script>
	import { get } from "../../API";
	import Story from "../Stories/Story.svelte";
	import StoryCard from "../Stories/StoryCard.svelte";
	import SmallStory from "../Stories/SmallStory.svelte";

	const promise = get("http://localhost:3003/api/feed");
</script>

<div class="feed container">
	<h3>Feed</h3>
	{#await promise}
		<h4>Waiting...</h4>
	{:then { success, data }}
		<div class="cover">
			<Story story={data[0]}></Story>
		</div>
		<div class="stack">
			<SmallStory story={data[1]}></SmallStory>
			<SmallStory story={data[2]}></SmallStory>
		</div>
		{#each data.slice(3) as story}
			<StoryCard {story}></StoryCard>
		{/each}
	{/await}
</div>

<style lang="scss">
	.feed {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto auto;
		grid-auto-flow: row;
		grid-auto-rows: auto;
	}

	.stack {
		display: grid;
		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 3;
		grid-column-end: 3;
		gap: 16px;
	}

	.cover {
		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	
	h1 {
		margin-bottom: 24px;
	}
</style>

