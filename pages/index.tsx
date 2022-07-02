// Next.js App
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Text h1>
          Welcome to my Blog
        </Text>
      </main>
    </div>
  );
};

export default Home;
