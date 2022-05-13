import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";
import Link from "next/link";
import { Button } from "react-daisyui"

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
          <Link href="/posts/first-post" passHref>
            <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              First Post
            </Button>
          </Link>
          <br />
          <Link href="/posts/next-review" passHref>
            <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Next Review
            </Button>
          </Link>
          <br />
          <Link href="/posts/mantine-review" passHref>
            <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Mantine Review
            </Button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Blog;
