import type { NextPage } from "next";
import * as React from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/400.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
        <Nav />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Blog</h1>
        <br />

        <Button variant="contained">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Button>
      </main>
    </div>
  );
};

export default Home;
