import type { NextPage } from "next";
import type { ReactElement } from "react";
//import * as React from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "./blog.module.css";
import "@fontsource/roboto/400.css";
import Button from "@mui/material/Button";
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
          <Button variant="contained">
            <Link href="/posts/first-post"> First Post</Link>
          </Button>
          <br />
          <Button variant="contained">
            <Link href="/posts/next-review"> Next.js Review</Link>
          </Button>
        </main>
      </div>
    </>
  );
};

export default Blog;
