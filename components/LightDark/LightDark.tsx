import React from "react";
import {
  createStyles,
  Switch,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    "& *": {
      cursor: "pointer",
    },
  },

  icon: {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: 3,
  },

  iconLight: {
    left: 4,
    color: theme.white,
  },

  iconDark: {
    right: 4,
    color: theme.colors.gray[6],
  },
}));

export default function LightDark() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  return (
    <Group position="right" my={30}>
      <div className={classes.root}>
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="md"
          aria-label="Light/Dark Mode toggle"
          offLabel={<Sun className={classes.icon} size={18} />}
          onLabel={<MoonStars className={classes.icon} size={18} />}
        />
      </div>
    </Group>
  );
}
