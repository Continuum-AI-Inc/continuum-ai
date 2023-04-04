<script lang="ts">
	import {Button, Alert} from "@continuum-ai/ui";
	import { POST } from "@continuum-ai/utilities";
	import Cookies from "js-cookie";

	const redirect = new URLSearchParams(window.location.search).get("redirect");

	async function submit() {
		if (!username || !password) {
			show("Please enter username and password.")
			return;
		}

		const { success, data, errors } = await POST("http://localhost:3001/api/v1/user/login", {
			username: username,
			email: username,
			password
		}, { headers: { "content-type": "application/json" }});

		if (success == true) {
			// Set all cookies
			const options = {
				// TODO: Change to "continuum-ai.de" in Production
				domain: "localhost",
				// Expire in 30 days
				expires: 30
			};

			Cookies.set("_C_TOKEN_", data.token, options);
			
			if (redirect) {
				window.location.href = redirect;
			} else {
				window.location.href = "/user/"
			}
		} else {
			show(errors[0]);
		}
	}

	let show: any;
	var password: string, username: string;
</script>

<div class="column gap-lg">
	<Alert bind:show={show}></Alert>
	<h2>Log in</h2>
	<input type="text" placeholder="Username or Email" bind:value={username} />
	<input type="password" placeholder="Password" bind:value={password} />
	<div class="row gap-lg">
		<Button onclick={submit}>Login</Button>
		<Button link="/signup/" theme="light">Signup</Button>
	</div>
	<div class="flex-row justify-between">
		<a href="./forgot_password.php" id="registerlink">Forgot your password?</a>
	</div>
</div>