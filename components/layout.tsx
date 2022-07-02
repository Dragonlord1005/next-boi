import { ReactNode } from "react";
import dynamic from "next/dynamic";

// const LightDark = dynamic(() => import("./LightDark/LightDark"));
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
