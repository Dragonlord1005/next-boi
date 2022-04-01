import type { NextPage } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Title } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title align='center'>Welcome to my Blog</Title>
      </main>
    </div>
  );
};

export default Home;
