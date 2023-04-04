async function request(route: string, init?: RequestInit) {
	return await fetch(route, init);
}

async function GET(route: string, init?: RequestInit) {
	const response = await request(route, { method: "GET", ...init });
	return await response.json()
}

type RequestBody = string | {[key: string]: any} | any[];

async function POST(route: string, body: RequestBody, init?: RequestInit) {
	const response = await request(route, { method: "POST", body: typeof body == "string" ? body : JSON.stringify(body), ...init });
	
	return await response.json()
}

async function PATCH(route: string, body: RequestBody, init?: RequestInit) {
	const response = await request(route, { method: "PATCH", ...init, body: typeof body == "string" ? body : JSON.stringify(body) });
	return await response.json()
}

async function DELETE(route: string, body: RequestBody, init?: RequestInit) {
	const response = await request(route, { method: "DELETE", ...init, body: typeof body == "string" ? body : JSON.stringify(body) });
	return await response.json()
}

async function PUT(route: string, body: RequestBody, init?: RequestInit) {
	const response = await request(route, { method: "PUT", ...init, body: typeof body == "string" ? body : JSON.stringify(body) });
	return await response.json()
}

export { GET, POST, PATCH, DELETE, PUT }