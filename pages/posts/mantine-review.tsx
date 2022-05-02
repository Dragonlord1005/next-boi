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

  date: {
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

const MantineReview: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Mantine Review</title>
        <meta name="My mantine review" content="Mantine Review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Title align="center" className={classes.title}>
          Mantine Review
        </Title>
        <Text className={classes.date}>5/2/22</Text>
        <article>
          <Text>Well hello there!</Text>
          <Text>For this post I'm going to tell you how awesome Mantine is!</Text>
          <Text>
            <ul>
              <li><Text>First it has great support for next.js with minor configuration changes.</Text></li>
              <li><Text>Second, it looks awesome!</Text></li>
              <li><Text>Third, the documentaton is AWESOME!</Text></li>
              <li><Text>Now the downsides...</Text></li>
              <li><Text>First, the component libraries documentation sucks, I was trying to make the awesome navbar you see above, and I got the code from there component site, but I didn't realize you had to provide arguments, so I made an issue request asking for help, and they basically said no. I was prett annoyed because I hadn't been able to figure it out, the only way I managed to eventually figure it out was because of replits hacker plan where it can let you use ai to explain code, and then I eventually figured it out right after I did that. It was annoying because it would've taken a short amount of time to say, "Hey! Just provide the arguments in the html when calling it!" It would've been that easy, and they didn't.</Text></li>
              <li><Text>Second, some of their additional modules documentation si poor, I wanted to use rte which they provide, and thought it would be super fast and super easy, NOPE! didn't work at all. I couldn't figure out how to actually save the data, who knows, maybe I'm stupid, but I was annoyed by that.</Text></li>
            </ul>
          </Text>
          <Text>That concludes this article! thanks for listening to me rant.</Text>
        </article>
      </Container>
    </div>
  );
};

export default MantineReview;
