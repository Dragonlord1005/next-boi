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

      <div className={styles.main}>
        <h1 className={styles.title}>
          TEMPLATE
        </h1>
        <a className={styles.description}>Placeholder</a>
        <article>
          <a>hi</a>
        </article>
      </div>
    </div>
  );
};

export default Template;
