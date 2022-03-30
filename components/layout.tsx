import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

type Props = {
  children?: ReactNode;
};

const links = [{ link: "/", label: "Home" }];
const Layout = ({ children }: Props) => (
  <div>
    <Navbar links={links} />
    {children}
  </div>
);

export default Layout;
