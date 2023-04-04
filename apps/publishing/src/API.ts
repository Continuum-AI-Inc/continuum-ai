import { getCookie } from "./Cookies";

const AUTH_TOKEN = getCookie("__auth_token__") || "TEST_AUTH";

async function get(route: string, token: string = AUTH_TOKEN) {
	return await fetch(route).then(response => response.json()).then(json => json)
}

export { get }