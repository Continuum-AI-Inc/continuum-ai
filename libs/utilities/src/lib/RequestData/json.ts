async function isContentTypeJson(request: Request): Promise<any | null> {
	// Check if the provided content-type is actually json
	if (request.headers.get("content-type") !== "application/json") {
		return null;
	}

	// Check if the body was set.
	if (!request.body) {
		return null;
	}

	return await request.json();
}

export { isContentTypeJson }