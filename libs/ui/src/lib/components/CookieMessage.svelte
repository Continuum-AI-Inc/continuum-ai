<script lang="ts">
	var element: HTMLDivElement;
	
	function removeCookieMessage() {
		element.remove()
		// Set the cookie so the message does not appear again.
		document.cookie = 'seen_cookie_message=true; secure; expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=continuum-ai.de; path=/';
	}
</script>

<div class='cookie_message' bind:this={element}>
	<div id='inner_cookie' class='flex-row' style='gap: 50px'>
		<img src='/images/cookie.png' width=250 alt="">
		<div>
			<h2>That's no moon! That's a cookie...</h2>
			<p>We use cookies to improve your experience on our site, we actually don't use third party tools that would require to set cookies. All in all we only store information about you once you're logged in to identify you. Until then we only store three cookies... One for the theme you selected (dark or light), one for the order type in our docs and one to not show you this message everytime you visit the site... isn't that ironic? We would offer you to manage all cookies but since there are only two which both are important to the functionality of the page...</p>
			<div class='flex-row' style='gap: 10px;'>
				<!--<a class='button strong' id='manage_cookie_button'>Manage Cookies</a>-->
				<button on:click={removeCookieMessage}>Accept Cookies</button>
				<a href='/docs/privacy/'>Privacy and Terms</a>
			</div>
		</div>
	</div>
</div>