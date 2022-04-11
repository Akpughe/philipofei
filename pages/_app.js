import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const showProgressBar = (delay) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Philip Ofei</title>
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />

      </Head>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
