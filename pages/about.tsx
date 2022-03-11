import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/400.css';

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    About
                </h1>
            </main>
        </div>
    )
}

export default About;