import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar/Navbar"));

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
