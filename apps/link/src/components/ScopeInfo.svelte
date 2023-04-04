<script lang="ts">
	import type { Scope } from "@continuum-ai/utilities";


	// The scope consists of three elements: 'name', 'description' and 'icon'
	export let scope: Scope;
</script>

<div class="row gap-md">
	<div class="material-symbols-outlined">{scope.icon}</div>
	<div class="column align-center">
		<span class="condition-title">{scope.name}</span>
		<span class="condition-description">{scope.description}</span>
	</div>
</div>
