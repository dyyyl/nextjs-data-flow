import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

import GlobalStyle from 'shared/styles/GlobalStyle';

const queryClient = new QueryClient();

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef(queryClient);

  return (
    <>
      <Head>
        <title>WHO WILL BE THE MOST POPULAR DEV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
