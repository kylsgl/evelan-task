import { useEffect, useState } from 'react';
import { getUsers, type User, type UserData } from '@/services/api/getUsers';
import Button from '@/components/common/button';
import UserListCard from './user-list-card';

interface UserListProps extends UserData {}

export default function UserList({
	data: users,
	page,
	total_pages,
}: UserListProps): JSX.Element {
	const [currentUsers, setCurrentUsers] = useState<User[]>(users);
	const [currentPage, setCurrentPage] = useState<UserData['page']>(page);

	useEffect((): void => {
		if (currentPage === page) {
			return;
		}

		getUsers(currentPage)
			.then(({ data }: UserData): void => {
				setCurrentUsers((current): User[] => [...current, ...data]);
			})
			.catch(console.error);
	}, [currentPage, page]);

	const handleClick = (): void => {
		setCurrentPage((current): number => current + 1);
	};

	return (
		<main className="flex flex-col gap-10 items-center justify-center mx-auto p-10">
			<section className="flex flex-row flex-wrap gap-4 items-center justify-center max-w-[51rem] md:gap-12">
				{currentUsers.map(
					(user: User): JSX.Element => (
						<UserListCard key={user.email} {...user} />
					)
				)}
			</section>

			<Button disabled={currentPage >= total_pages} onClick={handleClick}>
				Load More
			</Button>
		</main>
	);
}
