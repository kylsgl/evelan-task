import { type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react';

export default function Button(
	props: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
): JSX.Element {
	return (
		<button
			className={`bg-teal-700 px-4 py-2 rounded-lg text-white ${
				props.disabled !== undefined && props.disabled ? 'opacity-50' : ''
			}`}
			{...props}
		/>
	);
}
