import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Header from 'components/Layout/Header';
import GlobalStyle from 'styles/global-stlyes';
import BodyWrapper from 'components/Layout/BodyWrapper';
import { wrapper } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      <BodyWrapper>
        <Component {...pageProps} />
      </BodyWrapper>
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
