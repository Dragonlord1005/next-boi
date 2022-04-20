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

const NextReview: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Review</title>
        <meta name="description" content="Next Review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Title align="center" className={classes.title}>
          Next Review
        </Title>
        <Text>1/2/22</Text>
        <article>
          <Text>First the pros of NextJS</Text>
          <Text>
            So first, its really easy to setup. Second, you dont have to deal
            with routing. Third, its easy to optimize
          </Text>
          <Text>The Cons</Text>
          <Text>
            Lame documentation Bad premade components Many more things
          </Text>
          <Text>
            This was pretty short but I tried my best, not really used to this
            sort of thing.
          </Text>
        </article>
      </Container>
    </div>
  );
};

export default NextReview;
