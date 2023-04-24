import { type Static, Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const BASE_URL = 'https://reqres.in/';

const userSchema = Type.Object({
	id: Type.Number(),
	email: Type.String(),
	first_name: Type.String(),
	last_name: Type.String(),
	avatar: Type.String(),
});

const userDataSchema = Type.Object({
	page: Type.Number(),
	per_page: Type.Number(),
	total: Type.Number(),
	total_pages: Type.Number(),
	data: Type.Array(userSchema),
});

export type User = Static<typeof userSchema>;

export type UserData = Static<typeof userDataSchema>;

export async function getUsers(page = 1): Promise<UserData> {
	const response = await fetch(`${BASE_URL}api/users?page=${page}`);
	const data: unknown = await response.json();

	if (!Value.Check(userDataSchema, data)) {
		throw new Error('Invalid user data json');
	}

	return data;
}
