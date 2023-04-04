<script lang="ts">
	import {Alert} from "@continuum-ai/ui";
	import {Button} from "@continuum-ai/ui";
	import { POST } from "@continuum-ai/utilities";
	
	var redirect = new URLSearchParams(window.location.search).get("redirect");

	async function submit() {
		if (!username || !password || !email || !name) {
			show("Would you mind filling out all those pesky inputs?")
			return;
		}

		try {
			const { success, errors } = await POST("http://localhost:3001/api/v1/user/register", {
				username: username,
				password: password,
				email: email,
				name: name
			}, {
				headers: {
					"content-type": "application/json"
				}
			})

			if (success == true) {
				if (redirect) {
					window.location.href = redirect;
				} else {
					window.location.href = "/login"
				}
			} else {
				show(errors[0]);
			}
		} catch(error) {
			show("Houston! We've got a problem up here! The cloud is not responding!");
		}
	}

	let show: any;
	var password: string, username: string, name: string, email: string;
</script>

<div class="column gap-lg">
	<Alert bind:show={show}></Alert>
	<h1>Sign up</h1>
	<div class="flex-row gap-lg">
		<input type="text" placeholder="Full Name" bind:value={name}>
		<input type="text" placeholder="Username" bind:value={username}>
	</div>
	<input type="text" placeholder="Email - Requires Verification" bind:value={email}>
	<input type="password" placeholder="Password" bind:value={password}>
	<div class="row gap-lg">
		<Button onclick={submit}>Signup</Button>
	</div>
	<a href="/login">Already have an account?</a>
</div>