<script lang="ts">
	export let story;
</script>

<div class="story">
	<img src={story.cover} alt="">
	<div class="story-inner">
		<h2>{story.title}</h2>
		<p>{story.gist}</p>
	</div>
	<span class="material-symbols-outlined">arrow_forward</span>
</div>

<style lang="scss">
	$spacing: 30px;

	.story {
		position: relative;
		width: 100%;
		max-height: 400px;
		overflow: hidden;
		border-radius: 16px;
		cursor: pointer;
		user-select: none;

		&:hover img {
			transform: scale(1.1);
		}

		&:hover span {
			left: $spacing + 10px;
		}

		& img {
			transition: transform 0.6s ease;
			width: 100%;
			height: 400px;
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
				font-size: 48px;
				font-weight: 500;
				color: #fff;
			}

			& p {
				color: #ddd;
				font-size: 20px;
				font-weight: 500;
			}
		}

		& span {
			transition: left 0.6s ease;
			display: block;
			position: absolute;
			bottom: $spacing;
			left: $spacing;
			color: #fff;
			font-size: 48px;
		}
	}
</style>