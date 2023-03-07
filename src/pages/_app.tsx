import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/pages/_app.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
