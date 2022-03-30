import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import Navbar from "./Navbar/Navbar";

type Props = {
  children?: ReactNode;
};

const links = [{ link: '/', label: 'Home' }]
const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <Navbar links={links}  />
    </Head>
    {children}
  </div>
);

export default Layout;
