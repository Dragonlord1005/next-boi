import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";
import "@fontsource/roboto/400.css";

const NextReview: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Review</title>
        <meta name="description" content="From a beginners perspective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Next.js review</h1>
        <h2 className={styles.description}>3/24/22</h2>
      </main>
    </div>
  );
};

export default NextReview;
