import type { APIRoute } from "astro";

export const post: APIRoute = async function({ params, request }) {
	console.log(request)
}