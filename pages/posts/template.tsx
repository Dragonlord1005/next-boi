import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";

const Template: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TEMPLATE</title>
        <meta name="description" content="TEMPLATE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TEMPLATE</h1>
        <h2 className={styles.description}>PLACEHOLDER</h2>
      </main>
    </div>
  );
};

export default Template;
