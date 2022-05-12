import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppProps) {
  const { Component, pageProps }: AppPropsWithLayout = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  //const { Component, pageProps } = props;

  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}
