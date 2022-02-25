import { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/buttons.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/*  <ComingSoon />*/}
    </>
  );
}

export default MyApp;
