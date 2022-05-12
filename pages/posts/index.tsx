import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";
import Link from "next/link";




const Blog: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Blog Posts</title>
          <meta name="description" content="Blog Posts" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 align="center" className={styles.title}>
            Blog Posts
          </h1>
          <Link href="/posts/first-post" passHref>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">First Post</button>
          </Link>
          <br />
          <Link href="/posts/next-review" passHref>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Next Review</button>
          </Link>
          <br />
          <Link href="/posts/mantine-review" passHref>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Mantine Review</button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Blog;
