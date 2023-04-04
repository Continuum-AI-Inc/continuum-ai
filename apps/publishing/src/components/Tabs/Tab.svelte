<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 1px solid white;
		border-radius: 0;
		margin: 0;
		color: #666;
		font-size: 18px;
		cursor: pointer;
		padding-bottom: 8px;
	}
	
	.selected {
		border-bottom: 1px solid #111;
		color: #111;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>