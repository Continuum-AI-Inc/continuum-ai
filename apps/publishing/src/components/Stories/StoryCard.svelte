<script lang="ts">
	export let story;

	function navigateTo() {
		window.location.href = `/story?id=${story.remote_id}`;
	}
</script>

<div class="story-card" on:click={navigateTo} on:keypress={navigateTo}>
	<img src={story.cover} alt="">
	<div class="story-body">
		<h3>{story.title}</h3>
		<p>{story.gist}</p>
		<div class="row center gap-md">
			<span>12 hours ago</span>𐄁
		<span class="category">
			{story.category}
		</span>
		</div>
	</div>
</div>

<style lang="scss">
	.story-card {
		border: 1px solid #eee;
		border-radius: 16px;
		width: 100%;
		cursor: pointer;
		overflow: hidden;

		&:hover img {
			transform: scale(1.05);
		}

		& img {
			object-fit: cover;
			max-height: 250px;
			width: 100%;
			transition: transform 0.6s ease;
			border-top-right-radius: 16px;
			border-top-left-radius: 16px;
			transform-origin: 50% 50%;
		}

		& .story-body {
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 8px;

			& h3 {
				font-size: 18px;
				line-height: 24px;
				font-weight: 500;
				color: #333;
			}

			& span {
				font-size: 14px;
				color: #666666;
			}

			& span.category {
				display: inline;
				border-radius: 4px;
				padding: 2px 4px;
				border: 1px solid #eee;
				color: #111;
				width: auto;
			}
		}
	}
</style>