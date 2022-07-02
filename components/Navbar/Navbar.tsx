import React, { useState } from "react";
import NextLink from "next/link";
import { Dropdown, Container, Text, css, Spacer } from "@nextui-org/react";

export default function Navbar() {
  return (
    <header>
      <Container display="flex">
        <Dropdown>
          <Dropdown.Button flat>Trigger</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">New file</Dropdown.Item>
            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            <Dropdown.Item key="delete" color="error">
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Text h2>My Blog</Text>
      </Container>
    </header>
  );
}
