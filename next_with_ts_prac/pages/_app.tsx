import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Header from 'components/Layout/Header';
import GlobalStyle from 'styles/global-stlyes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
