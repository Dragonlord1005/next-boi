import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import NavBar from "./Navbar/Navbar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <Nav />
      <NavBar />
    </Head>
    {children}
  </div>
);

export default Layout;
