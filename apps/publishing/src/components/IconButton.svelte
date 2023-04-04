<script lang="ts">
	export let icon: string;
	export let link: string = "";
</script>

<a href={link}>
	<span class="material-symbols-outlined">{icon}</span>
	<slot />
</a>

<style lang="scss">
	a {
		color: #111;
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		font-size: 16px;
		margin: 16px 0;
		margin-left: 16px;
		transition: margin-left 0.4s ease;

		&:hover {
			margin-left: 24px;
		}
	}
</style>