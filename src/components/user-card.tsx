import Image from 'next/image';
import { type User } from '@/services/api/getUsers';

interface UserProps extends User {}

export default function UserCard({
	id,
	email,
	first_name,
	last_name,
	avatar,
}: UserProps): JSX.Element {
	return (
		<article className="bg-teal-700 border border-gray-500 flex flex-col gap-1.5 items-center justify-center p-6 w-[14rem] rounded-lg shadow-xl text-white">
			<Image
				alt={`Photo of ${first_name} ${last_name}`}
				className="rounded-full min-h-[3.125rem]"
				decoding="async"
				src={avatar}
				width={50}
				height={50}
			/>

			<span>{id}</span>

			<h1 className="text-1xl font-medium">{`${first_name} ${last_name}`}</h1>

			<span className="inline-block text-sm">{email}</span>
		</article>
	);
}
