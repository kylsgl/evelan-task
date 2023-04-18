const BASE_URL = 'https://reqres.in/';

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface UserData {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: User[];
}

export async function getUsers(page = 1): Promise<UserData> {
	const response = await fetch(`${BASE_URL}api/users?page=${page}`);
	const data = (await response.json()) as UserData;
	return data;
}
