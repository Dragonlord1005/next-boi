import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import LightDark from "./LightDark/LightDark";

type Props = {
  children?: ReactNode;
};

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/posts", label: "Blog Posts" },
];
const Layout = ({ children }: Props) => (
  <div>
    <Navbar links={links} />
    {children}
    <LightDark />
  </div>
);

export default Layout;
