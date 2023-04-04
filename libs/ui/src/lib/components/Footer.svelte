<footer>
	<div class="inner-footer">
		<div class="flex-column">
			<h1>Products</h1>
			<a href="/markdocks">Writing Documentation</a>
			<a href="/delta">Project Management</a>
			<a href="http://localhost:3003">Publication</a>
			<a href="/design">Web Design</a>
			<a href="/snowblind">Reactive Framework</a>
		</div>
		<div class="flex-column">
			<h1>About</h1>
			<a href="/team/meet">Our Team</a>
			<a href="/team/contact">Contact</a>
		</div>
		<div class="flex-column">
			<h1>Learn</h1>
			<a href="/docs/guides">Guides</a>
			<a href="/docs/design/philosophies-of-the-web">Philosophies of the Web</a>
			<a href="/docs/programming/performance">Performance</a>
			<a href="/docs/web/components">Components</a>
			<a href="/docs/programming">Programming</a>
		</div>
		<div class="flex-column">
			<h1>Social</h1>
			<a href="https://twitter.com/Continu13798401"
				><img
					src="/images/twitter.png"
					alt="Twitter"
					class="small-img"
				/></a
			>
			<a href="https://instagram.com"
				><img
					src="/images/instagram.png"
					alt="Instagram"
					class="small-img"
				/></a
			>
		</div>
	</div>

	<div
		class="flex-row-wrap justify-between"
		style="padding: 50px; max-width: 1400px; margin: 0 auto;"
	>
		<p style="margin: 20px 0 0 0; color: #888888;">
			Copyright © 2022 Continuum-AI Inc. All rights reserved.
		</p>
		<div class="flex-row" style="gap: 10px; margin: 20px 0 0 0;">
			<a href="/docs/privacy">Privacy Policy</a>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background: #191919;
		width: 100%;
		height: auto;
	}

	.inner-footer {
		max-width: 1400px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		margin: 0 auto;
		padding: 50px;
		justify-content: center;
	}

	footer h1 {
		font-size: 16px;
		color: #fff;
		margin: 30px 0 10px 0;
		line-height: 18px;
	}

	.small-img {
		width: 25px;
		height: 25px;
	}

	footer a {
		color: #888888;
		text-decoration: none;
		margin: 5px 0;
		font-weight: 500;
	}

	footer a:hover {
		color: rgb(224, 224, 224);
	}

	.flex-row-wrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.inner-footer {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 490px) {
		.inner-footer {
			grid-template-columns: 1fr;
		}

		footer .flex-column {
			align-items: center;
		}
	}
</style>
