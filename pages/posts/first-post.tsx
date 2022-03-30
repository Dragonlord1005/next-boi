import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";

const FirstPost: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Post</title>
        <meta name="description" content="First Ever Post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My first Post</h1>
        <h2 className={styles.description}>3/23/22</h2>
        <article>
          <a className={styles.text}>The experience has been fun but hard</a>
          <a className={styles.text}>
            So far its been quite a lot of work to make stuff look the way I
            want it to, but fun at the same time. My next review will be a
            review of Next.js from a beginners perspective
          </a>
        </article>
      </main>
    </div>
  );
};

export default FirstPost;
