import type { NextPage } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import styles from "./blog.module.css";
import { Button } from "@mantine/core";
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
          <h1 className={styles.title}>Blog Posts</h1>
          <br />
          <Link href="/posts/first-post" passHref>
            <Button component="a">First Post</Button>
          </Link>
          <br />
          {/*<Button variant="contained">
            <Link href="/posts/next-review"> Next.js Review</Link>
          </Button*/}
        </main>
      </div>
    </>
  );
};

export default Blog;
