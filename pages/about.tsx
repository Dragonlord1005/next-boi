import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Joe from "../public/Joe.jpg";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <article>
          <Image src={Joe} alt="Derpy picture"></Image>
          <br />
          <a>I am simple teenager learning to code</a>
          <a>
            My goal of this is to create a blog using typescript, next, and
            react.
          </a>
          <br />
          <a>
            I should probably end up updating this has I do want to make an
            actual blog and so far it&apos;s just talking about the project
          </a>
        </article>
      </main>
    </div>
  );
};

export default About;
