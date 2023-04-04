<script lang="ts">
	import { onMount } from "svelte";


	let theme = ""
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	onMount(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			theme = "dark"
			document.documentElement.classList.add("dark");
		} else {
			theme = "light"
			document.documentElement.classList.remove("dark");
		}
	})

	function toggleTheme() {
		if (theme == "dark") {
			theme = "light";
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light")
		} else {
			theme = "dark";
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark")
		}
	}
</script>

<button on:click={toggleTheme}><span class="material-symbols-outlined">{#if theme == "light"}
	dark_mode
{:else}
	light_mode
{/if}</span></button>