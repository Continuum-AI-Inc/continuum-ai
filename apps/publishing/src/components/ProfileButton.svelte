<script lang="ts">
	import { getCookie } from "../Cookies";
	import { LINK_TOKEN, Continuum } from "../Shared";

	const userId = getCookie("__continuum_client_cookie__");

	Continuum.init({
		client_key: LINK_TOKEN,
		cookie: true,
		cookie_name: "__continuum_client_cookie__",
		user_id: userId
	})

	function toggleLogin() {
		if (userId) {
			Continuum.logout()
		} else {
			Continuum.login()
		}
	}

	function viewProfile() {
		
	}
</script>


{#if userId}
	<div class="profile" on:click={viewProfile} on:keydown={viewProfile}>
		<img src="https://picsum.photos/50/50" alt="">
		<h4>Moritz Utcke</h4>
	</div>
{:else}
	<div class="profile" on:click={toggleLogin} on:keydown={toggleLogin}>
		<h4>Login or Register</h4>
	</div>
{/if}


<style lang="scss">
	.profile {
		border-top: 1px solid #eee;
		height: 80px;
		cursor: pointer;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 0 40px;
		transition: background-color 0.4s ease;

		&:hover {
			background-color: #f4f4f4;
		}

		& img {
			border-radius: 50%;
			height: 50px;
			width: 50px;
		}

		& h4 {
			font-weight: 500;
			font-size: 18px;
			color: #333;
		}
	}
</style>