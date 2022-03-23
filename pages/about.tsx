import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/400.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <a className={styles.description}>
          This is a project where my goal is to make a blog using only
          typescript and Next.js
        </a>
      </main>
    </div>
  );
};

export default About;
