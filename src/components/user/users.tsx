import { useEffect, useState } from 'react';

import { getUsers, type User, type UserData } from '@/services/api/getUsers';

import Button from '@/components/common/button';

import UsersCard from './users-card';

export default function Users({
	data,
	page,
	total_pages,
}: UserData): JSX.Element {
	const [currentData, setCurrentData] = useState<User[]>(data);
	const [currentPage, setCurrentPage] = useState<UserData['page']>(page);

	useEffect((): void => {
		if (currentPage === page) {
			return;
		}

		getUsers(currentPage)
			.then(({ data: users }: UserData): void => {
				setCurrentData((current): User[] => [...current, ...users]);
			})
			.catch(console.error);
	}, [currentPage, page]);

	const handleClick = (): void => {
		setCurrentPage((current) => current + 1);
	};

	return (
		<main className="flex flex-col gap-10 items-center justify-center mx-auto p-10">
			<section className="flex flex-row flex-wrap gap-4 items-center justify-center max-w-[51rem] md:gap-16">
				{currentData.map(
					(userData): JSX.Element => (
						<UsersCard key={userData.email} {...userData} />
					)
				)}
			</section>

			<Button disabled={currentPage >= total_pages} onClick={handleClick}>
				View More
			</Button>
		</main>
	);
}
