import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { getCookie, setCookies } from 'cookies-next';
import { MantineProvider, ColorSchemeProvider, useMantineColorScheme, ColorScheme } from "@mantine/core";


/*
* TODO: Add cookie support for dark mode
*/

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppProps & { colorScheme: ColorScheme }, { Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  //const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
