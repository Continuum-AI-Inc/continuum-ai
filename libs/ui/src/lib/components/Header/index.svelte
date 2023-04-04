<script lang="ts">
	import Button from "../Button.svelte";
	import ThemeSelector from "../ThemeSelector.svelte";

	export let user: any;
	
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<header>
	<div class="header-inner">
		<a href="http://localhost:3000" class="header-logo">›_</a>
		<div class="header-links {isOpen ? 'open' : 'closed'} center">
			<a href="/docs" class="link">Documentation</a>
			<a href="/link" class="link">Link</a>
			<a href="/projects" class="link">Projects</a>
			<a href="/about" class="link">About</a>
			<a href="http://localhost:3003" class="link">Publishing</a>
			<ThemeSelector></ThemeSelector>
			{#if user}
			<div class="row center gap-lg profile-button">
				<img src={"/images/profile-placeholder.svg"} alt="" class="profile-picture-image">
				<a href="/user">Letsmoe</a>
			</div>
			{:else}
			<Button link="/login" theme="light">Login</Button>
			{/if}
		</div>
		<div
	class="hamburger {isOpen ? 'open' : 'closed'}"
	on:click={toggleMenu}
	on:keydown={toggleMenu}
>
	<span />
	<span />
	<span />
</div>
	</div>
</header>

<style lang="scss">
	@import "./index.module.scss";
</style>