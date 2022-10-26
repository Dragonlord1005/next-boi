import type { NextPage } from "next";
// import type { ReactElement } from "react";
import Head from "next/head";
import styles from "./blog.module.css";
import { Button, createStyles, Title } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 75,
    fontWeight: 900,
    lineHeight: 1.1,
    paddingBottom: 20,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },
}));

const Blog: NextPage = () => {
  const { classes } = useStyles();
  return <>
    <div className={styles.container}>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Blog Posts" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://next-boi-git-og-image-dragonlord1005.vercel.app/api/og?title=Blog Posts"
        />
      </Head>
      <main className={styles.main}>
        <Title align="center" className={classes.title}>
          Blog Posts
        </Title>
        <Link href="/posts/first-post" passHref legacyBehavior>
          <Button component="a" className="bg-blue-600 mb-5">
            First Post
          </Button>
        </Link>
        <Link href="/posts/next-review" passHref legacyBehavior>
          <Button component="a" className="bg-blue-600 mb-5">
            Next Review
          </Button>
        </Link>
        <Link href="/posts/mantine-review" passHref legacyBehavior>
          <Button component="a" className="bg-blue-600 mb-5">
            Mantine Review
          </Button>
        </Link>
        <Link href="/posts/tailwind-changes" passHref legacyBehavior>
          <Button component="a" className="bg-blue-600 mb-5">
            Tailwind Changes
          </Button>
        </Link>
      </main>
    </div>
  </>;
};

export default Blog;
