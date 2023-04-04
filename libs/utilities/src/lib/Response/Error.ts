export function error(errorList: string[], statusCode: number = 500, contentType: string = "application/json") {
	return new Response(JSON.stringify({
		success: false,
		errors: errorList
	}), {
		status: statusCode,
		statusText: "Error",
		headers: {
			"content-type": contentType
		}
	})
}