import { type GetServerSidePropsResult } from 'next';
import { getUsers, type UserData } from '@/services/api/getUsers';
import UserList from '@/components/user-list/user-list';

interface ServerProps {
	userData: UserData;
}

export default function UsersPage({ userData }: ServerProps): JSX.Element {
	return <UserList {...userData} />;
}

export async function getServerSideProps(): Promise<
	GetServerSidePropsResult<ServerProps>
> {
	const userData = await getUsers();

	return {
		props: {
			userData,
		},
	};
}
