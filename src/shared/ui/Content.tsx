import { FC } from "react";
import { Container, rem } from "@mantine/core";
import { Component } from "@model/index";
import classes from "./Content.module.css";

export const Content: FC<Component> = ({ children }) => (
  <Container
    fluid
    className={classes.container}
  >
    {children}
  </Container>
);
