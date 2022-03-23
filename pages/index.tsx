import type { NextPage } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/400.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Blog</h1>
      </main>
    </div>
  );
};

export default Home;
