export function success(body: any, contentType: string = "application/json") {
	return new Response(JSON.stringify({
		success: true,
		data: body
	}), {
		status: 200,
		statusText: "Success",
		headers: {
			"content-type": contentType
		}
	})
}