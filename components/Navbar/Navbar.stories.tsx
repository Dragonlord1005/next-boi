import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/posts", label: "Blog Posts" },
];

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    links: {
      description: "Takes link and label",
      table: {
        type: {
          summary: "Use link and label",
          detail: "Use an array of links and labels to generate navbar links.",
        },
      },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  //primary: true,
  links: links,
};
