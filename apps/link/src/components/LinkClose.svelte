<script lang="ts">
	import { onMount } from "svelte";


	export let data: any;
	export let domain: string;
	export let closeImmediately: boolean = false;

	// Send the received data to the opener window.
	function send() {
		window.opener.postMessage(data, "https://" + domain);
		window.close();
	}

	onMount(() => {
		if (closeImmediately) {
			send();
		}
	})
</script>

<button on:click={send}>Close</button>