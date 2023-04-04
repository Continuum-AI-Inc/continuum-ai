function getCookie(name: string) {
	let cookies = {};
	document.cookie.split(";").forEach(function (el) {
		let [key, value] = el.split("=");
		cookies[key.trim()] = value;
	});
	return cookies[name];
}

function setCookie(name: string, value: string, exdays: number = 100) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export { getCookie, setCookie };
