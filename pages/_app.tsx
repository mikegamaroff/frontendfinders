import { AppProps } from "next/app";
import React, { useContext, useReducer } from "react";
import { AppContext, DispatchContext } from "../context/StateContext";
import "../styles/globals.css";
import "../styles/buttons.css";
import Layout from "../components/Layout";
import { reducer } from "../context/reducer";
import { initialState } from "../context/reducer";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-961035603"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-961035603');`}
      </Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-961035603/UI63CL31saUDENP6oMoD'});`}
      </Script>

      <DispatchContext.Provider value={{ dispatch }}>
        <AppContext.Provider value={{ state }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}

export default MyApp;
