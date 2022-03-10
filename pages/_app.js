import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
