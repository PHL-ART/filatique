import { FC } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "@config/theme";
import { Component } from "@model/index";

export const ThemeProvider: FC<Component> = ({ children }) => {
  return <MantineProvider theme={theme} forceColorScheme="dark">{children}</MantineProvider>;
};
