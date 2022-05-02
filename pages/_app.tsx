import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { getCookie, setCookies } from "cookies-next";
import {
  MantineProvider,
  ColorSchemeProvider,
  useMantineColorScheme,
  ColorScheme,
} from "@mantine/core";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps }: AppPropsWithLayout = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  //const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});
