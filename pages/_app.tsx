import type { AppProps } from 'next/app';
import GlobalContextProvider from '../hooks/GlobalContext';

import Container from '../components/main/Container';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </GlobalContextProvider>
  );
}

export default MyApp;
