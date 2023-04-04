<script lang="ts">
	export let show: (message: string) => void;
	export let theme: "dark" | "light" = "light";
	let visible = false, content = "";
	show = (message: string) => {
		content = message;
		visible = true;

		setTimeout(() => {
			visible = false
		}, 4000)
	}
</script>

<div class="alert {visible ? "visible" : "invisible"} {theme}">
	<p>{content}</p>
</div>

<style lang="scss">
	.alert {
		position: absolute;
		background-color: #333;
		border-radius: 8px;
		padding: 16px 24px;
		top: 30px;
		box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.1);
		left: 30px;

		& p {
			color: #fafafa;
			margin: 0;
		}

		&.visible {
			animation: from-left 0.6s forwards;
		}

		&.invisible {
			animation: to-left 0.6s forwards;
		}

		&.light {
			background-color: #fafafa;
			border: 1px solid #eee;
			& p {
				color: #333;
			}
		}
	}

	@keyframes to-left {
		0% {
			visibility: visible;
			left: 30px;
		}

		100% {
			left: -100%;
			visibility: hidden;
		}
	}

	@keyframes from-left {
		0% {
			left: -100%;
		}

		100% {
			left: 30px;
		}
	}
</style>