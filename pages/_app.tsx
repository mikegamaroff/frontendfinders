import { AppProps } from "next/app";
import React, { useContext, useReducer } from "react";
import { AppContext, DispatchContext } from "../context/StateContext";
import "../styles/globals.css";
import "../styles/buttons.css";
import Layout from "../components/Layout";
import { reducer } from "../context/reducer";
import { initialState } from "../context/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
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
