import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-white text-black">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
