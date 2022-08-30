import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { RouterTransition } from "./RouterTransition";

const LightDark = dynamic(() => import("./LightDark/LightDark"));
const Navbar = dynamic(() => import("./Navbar/Navbar"));

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
    <RouterTransition />
    {children}
    <LightDark />
  </div>
);

export default Layout;
