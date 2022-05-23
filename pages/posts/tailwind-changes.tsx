import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";
import { createStyles, Title, Text, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    //color: theme.white,
    fontSize: 75,
    fontWeight: 900,
    lineHeight: 1.1,
    paddingBottom: 14,

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
    color: theme.white,
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

const TailwindChanges: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Tailwind Changes</title>
        <meta name="description" content="Tailwind Changes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Title align="center" className={classes.title}>
          Tailwind Changes
        </Title>
        <Text>5/23/22</Text>
        <article>
          <Text>Hi, this is a special announcement, you may be seeing a few changes to the site due to my implementation of tailwind!</Text>
          <Text>All this means is that there will be a few minor differences in the look of the site!</Text>
          <Text>Oh! And guess what, I&apos;m planning on adding some very cool article cards very soon!</Text>
          <Text>I know this post was short but I hope you got something out of it!</Text>
        </article>
      </Container>
    </div>
  );
};

export default TailwindChanges;
