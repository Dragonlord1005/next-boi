import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import LightDark from "./LightDark";

export default {
  title: "LightDark",
  component: LightDark,
} as ComponentMeta<typeof LightDark>;

export const Primary: ComponentStory<typeof LightDark> = () => (
  <LightDark></LightDark>
);
