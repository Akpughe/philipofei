import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useTheme } from 'next-themes';

class MyDocument extends Document {
  render() {
    const { theme } = useTheme();
    return (
      <Html>
        <Head />
        <body
          className={`${
            theme === 'light' ? 'doc_body' : 'bg_black'
          } text-black  dark:text-white`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
