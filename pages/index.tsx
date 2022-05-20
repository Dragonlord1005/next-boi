import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { createStyles, Title } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title align="center" className={classes.title}>
          Welcome to my Blog
        </Title>
      </main>
    </div>
  );
};

export default Home;
