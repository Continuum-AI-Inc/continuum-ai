<script lang="ts">
	export let onclick: (...args: any[]) => any = () => {};
	export let link: string = "";
	export let theme: "light" | "dark" = "dark";
	export let icon: string | null = null;
</script>

<a href={link || undefined} class="button {theme}" on:click={onclick}>{#if icon}
	<span class="material-symbols-outlined">{icon}</span>
{/if}<slot /></a>