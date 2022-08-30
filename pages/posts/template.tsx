import type { NextPage } from "next";
import Head from "next/head";
import styles from "./blog.module.css";
import { createStyles, Title, Text, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
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

const Template: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>TEMPLATE</title>
        <meta name="description" content="TEMPLATE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Title align="center" className={classes.title}>
          GitHub Codespaces
        </Title>
        <Text className={classes.description}>and why it's awesome</Text>
        <article>
          <a>GitHub Codespaces is incredible</a>
        </article>
      </Container>
    </div>
  );
};

export default Template;
