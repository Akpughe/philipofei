import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Philip Ofei</title>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
