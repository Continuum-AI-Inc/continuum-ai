<script lang="ts">
	import { Button } from "@continuum-ai/ui";
	//import { Continuum } from "@continuum-ai/link";
	import { onMount } from "svelte";

	onMount(() => {
		/* Continuum.init({
			public_key: "tRSZYPD8MJnj4ejGA55CH2IQiop1EFnv5EhjoQnorFsJqfdx0Od70Zdu5g3G_CmN"
		}, "http://localhost:3000") */
	})
</script>

<Button onclick={() => /*Continuum.login()*/""} theme="dark">Login</Button>