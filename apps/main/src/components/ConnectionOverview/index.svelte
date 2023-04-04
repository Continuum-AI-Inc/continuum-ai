<script lang="ts">
	import type { LinkApp, LinkConnection } from "@lib/Link";
	import type { ContinuumUser } from "@lib/User";
	import Link from "../Link.svelte";

	export let connections: (LinkApp & LinkConnection)[] | null;
	export let user: ContinuumUser;
</script>

<div class="flex flex-col">
	{#if connections == null}
		<h3>Connections</h3>

		<p>You don't currently have any Links to external apps.</p>
		<p>If you want to learn more about <a href="/docs/link">Continuum Link</a> and <a href="/docs/link/third-party-apps">Third-Party Apps</a> visit our <a href="/docs">docs</a></p>
		<p>Once you've set up your first connection with <a href="/link">Link</a> it will be displayed here where you can manage it.</p>
	{:else}
		{#each connections as connection}
			<Link connection={connection} user={user}></Link>
		{/each}
	{/if}
</div>

