import Link from "next/link";
import React from "react";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";

export default function NavBar() {
  return (
    <>
      <Navbar className="bg-base-100">
        <Navbar.Start>
          <Dropdown>
            <Button tabIndex={0} className="btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Button>
            <Menu
              tabIndex={0}
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Menu.Item>
                <Link href="/">Homepage</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/about">About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/posts">Posts</Link>
              </Menu.Item>
            </Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center>
          <Link href="/" passHref>
            <Button className="btn-ghost normal-case text-xl">Next-boi</Button>
          </Link>
        </Navbar.Center>
        
      </Navbar>
    </>
  );
}
