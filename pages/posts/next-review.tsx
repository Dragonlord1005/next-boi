import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";

const NextReview: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Next Review</title>
          <meta name="description" content="Next Review" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={styles.main}>
          <h1 className={styles.title}>
            Next Review
          </h1>
          <h2>1/2/22</h2>
          <article>
            <a>First the pros of NextJS</a>
            <a>
              So first, its really easy to setup. Second, you dont have to deal
              with routing. Third, its easy to optimize
            </a>
            <a>The Cons</a>
            <a>
              Lame documentation Bad premade components Many more things
            </a>
            <a>
              This was pretty short but I tried my best, not really used to this
              sort of thing.
            </a>
          </article>
        </div>
      </div>
    </>
  );
};

export default NextReview;
