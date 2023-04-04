export interface LinkApp {
	id: number,
	name: string,
	user_id: number,
	success_url: string,
	reject_url: string,
	public_key: string,
	creation_date: string,
	edit_url: string,
	domain: string,
	request_failure_email: string
}

export interface Scope {
	name: string,
	description: string,
	icon: string
}

export interface LinkConnection {
	user_id: number,
	app_id: number,
	custom_username: string,
	custom_name: string,
	custom_email: string
}