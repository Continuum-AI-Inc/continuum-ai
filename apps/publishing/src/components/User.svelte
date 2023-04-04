<script lang="ts">
	export let user: {
		public_id: string,
		username: string,
		profile_picture: string
	};
</script>

<div class="user">
	<div class="row center gap-lg">
		<img src={user.profile_picture} class="user-profile-picture">
		<div class="column">
			<h4>{user.username}</h4>
			<p>Hello</p>
		</div>
	</div>
</div>

<style lang="scss">
	.user {
		border-radius: 8px;
		background-color: #fafafa;
		border: 1px solid #eee;
		padding: 16px 24px;

		& .user-profile-picture {
			width: 60px;
			height: 60px;
			object-fit: cover;
			border-radius: 50%;
		}

		& h4 {
			font-size: 24px;
			font-weight: 500;
			color: #333;
		}
	}
</style>