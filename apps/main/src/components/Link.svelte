<script lang="ts">
	import type { LinkApp, LinkConnection, ContinuumUser } from "@continuum-ai/utilities";
	import { DELETE, POST } from "@continuum-ai/utilities";
	import {Modal, Alert} from "@continuum-ai/ui";

	export let connection: LinkConnection & LinkApp;
	export let user: ContinuumUser;

	const date = (new Date(connection.creation_date)).toLocaleDateString("en-US", {
		weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
	})

	function deleteConnection(public_key: string) {
		DELETE("http://localhost:3001/api/v1/link/connection", {
			public_key
		}, {
			headers: {
				"authorization": "Bearer " + user.token,
				"content-type": "application/json"
			}
		}).then((response) => {
			if (response.success == false) {
				showAlert("Something went wrong, please try again. If the issue persists, refresh your page.")
				return;
			}
			ref.parentNode?.removeChild(ref);
		}).catch(() => {
			showAlert("Something went wrong, please try again. If the issue persists, refresh your page.")
		})
	}

	let showAlert: any;
	let showModal: any = false;
	let ref: HTMLDivElement;
	let onsave = async () => {
		// Check if at least one field was filled out.
		if (!username && !name && !email) {
			showAlert("Please fill out at least one property to change.")
		}

		const {success} = await POST("http://localhost:3001/api/v1/link/connection", {
			app_id: connection.id,
			username,
			name,
			email
		}, {
			headers: {
				"content-type": "application/json",
				"authorization": "Bearer " + user.token
			}
		})

		if (success) {
			connection.custom_email = email;
			connection.custom_name = name;
			connection.custom_username = username;
		}
	}

	let username: string = connection.custom_username, name: string = connection.custom_name, email: string = connection.custom_email;
</script>


<div class="box-rounded" bind:this={ref}>
	<div class="row center justify-between mb-4">
		<div class="column">
			<h3 class="mb-1">{connection.name}</h3>
			<span class="date">{date}</span>
		</div>
		<div class="row gap-2">
			<button class="rounded-lg p-1 border-light border hover:bg-light" on:click={() => deleteConnection(connection.public_key)}><span class="material-symbols-outlined">delete</span></button>
			<button class="rounded-lg p-1 border-light border hover:bg-light" on:click={() => showModal = true}><span class="material-symbols-outlined">edit</span></button>
		</div>
	</div>
	
	{#if connection.custom_email}
		<span class="block date">Email: {connection.custom_email}</span>
	{/if}
	{#if connection.custom_username}
		<span class="block date">Username: {connection.custom_username}</span>
	{/if}
	{#if connection.custom_name}
		<span class="block date">Name: {connection.custom_name}</span>
	{/if}
	<Modal bind:showModal bind:onsave save={true}>
		<h3 slot="header">Adjust</h3>
		<label for="">Username</label>
		<input type="text" bind:value={username} placeholder="Jeffrey">
		<label for="">Name</label>
		<input type="text" bind:value={name} placeholder="John McJohnty">
		<label for="">Email</label>
		<input type="text" bind:value={email} placeholder="Email (must be validated!)">
	</Modal>
	<Alert bind:show={showAlert}></Alert>
</div>