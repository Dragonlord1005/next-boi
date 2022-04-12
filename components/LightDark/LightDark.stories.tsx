import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import LightDark from "./LightDark";

export default {
  title: "LightDark",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <LightDark></LightDark>;