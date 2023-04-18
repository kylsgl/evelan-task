import Button from '@/components/common/button';
import Link from 'next/link';

export default function HomePage(): JSX.Element {
	return (
		<main className="flex items-center justify-center h-screen w-screen">
			<Link className="" href="/users">
				<Button>View Users</Button>
			</Link>
		</main>
	);
}
