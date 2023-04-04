<script lang="ts">
	import IconButton from "./IconButton.svelte";
	import ProfileButton from "./ProfileButton.svelte";
</script>

<a class="logo" href="/">Continuum</a>
<div class="column links">
	<IconButton icon="search" link="/explore">Explore</IconButton>
	<IconButton icon="space_dashboard" link="/feed">Feed</IconButton>
	<IconButton icon="bookmarks" link="/bookmarks">Bookmarks</IconButton>
	<h3>Portfolio</h3>
	<IconButton icon="draw" link="/stories">Stories</IconButton>
	<IconButton icon="analytics" link="/statistics">Statistics</IconButton>
	<IconButton icon="notifications" link="/notifications">Notification</IconButton>
</div>
<ProfileButton></ProfileButton>

<style lang="scss">
	h3 {
		margin: 48px 0 24px 0;
		color: #666;
		font-weight: 500;
		font-size: 18px;
	}

	.links {
		margin-left: 40px;
	}

	.logo {
		user-select: none;
		font-size: 32px;
		font-weight: 300;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.1em;
		color: #333;
		display: block;
		margin-left: 40px;
		margin-top: 60px;
	}
</style>