import { type GetServerSidePropsResult } from 'next';
import { getUsers, type UserData } from '@/services/api/getUsers';
import Users from '@/components/user/users';

interface ServerProps {
	data: UserData;
}

export default function UsersPage({ data }: ServerProps): JSX.Element {
	return <Users {...data} />;
}

export async function getServerSideProps(): Promise<
	GetServerSidePropsResult<ServerProps>
> {
	const data = await getUsers();

	return {
		props: {
			data,
		},
	};
}
