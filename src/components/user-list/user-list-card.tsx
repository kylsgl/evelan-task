import Image from 'next/image';
import { type User } from '@/services/api/getUsers';

interface UserListCardProps extends User {}

export default function UserListCard({
	id,
	email,
	first_name,
	last_name,
	avatar,
}: UserListCardProps): JSX.Element {
	return (
		<div className="border border-neutral-200 flex flex-col gap-1.5 items-center justify-center p-6 w-[14rem] rounded-lg shadow-xl">
			<Image
				alt={`Avatar of ${first_name} ${last_name}`}
				className="bg-neutral-300 rounded-full min-h-[3.125rem] p-0.5 shadow-xl"
				decoding="async"
				src={avatar}
				width={55}
				height={55}
			/>

			<h1 className="flex flex-row gap-1.5 justify-center items-center text-lg font-medium">
				<span className="bg-neutral-200 rounded-full py-0.5 px-1.5 text-xs">
					{id}
				</span>{' '}
				{`${first_name} ${last_name}`}
			</h1>

			<span className="inline-block text-sm">{email}</span>
		</div>
	);
}
