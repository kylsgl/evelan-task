import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Fragment>
			<Head>
				<title>Evelan Test Task</title>
				<meta name="description" content="Next.js test task for Evelan" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
