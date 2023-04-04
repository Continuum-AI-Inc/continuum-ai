<script lang="ts">
	export let story;
</script>

<div class="small-story">
	<img src={story.cover} alt="">
	<div class="story-inner">
		<h2>{story.title}</h2>
		<p>{story.gist}</p>
	</div>
</div>

<style lang="scss">
	$spacing: 20px;

	.small-story {
		position: relative;
		width: 100%;
		overflow: hidden;
		border-radius: 16px;
		cursor: pointer;
		user-select: none;

		&:hover img {
			transform: scale(1.1);
		}

		& img {
			transition: transform 0.6s ease;
			width: 100%;
			max-height: 200px;
			height: 100%;
			filter: brightness(40%);
			object-fit: cover;
		}

		& .story-inner {
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding: $spacing;

			& h2 {
				font-size: 32px;
				font-weight: 500;
				color: #fff;
			}

			& p {
				font-size: 18px;
				color: #ddd;
				font-weight: 500;
			}
		}
	}
</style>