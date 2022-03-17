import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');
  });
  return (
    <>
      <Head>
        <title>
          Philip Ofei
          </title>
          {/* set viewport to 1790px */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
