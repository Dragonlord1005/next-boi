import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Joe from "../public/Joe.jpg";
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

const About: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title className={classes.title}>About</Title>
        <article>
          <Image src={Joe} alt="Derpy picture"></Image>
          <Text>I am simple teenager learning to code</Text>
          <Text>
            My goal of this is to create a blog using typescript, next, and
            react.
          </Text>
          <Text>
            I should probably end up updating this has I do want to make an
            actual blog and so far it&apos;s just talking about the project
          </Text>
        </article>
      </main>
    </div>
  );
};

export default About;
