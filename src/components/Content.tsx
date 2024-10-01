import { Container } from "@mantine/core";
import { Component } from "@model/index";
import { FC } from "react";

export const Content: FC<Component> = ({ children }) => {
  return (
    <Container w="100%" h="100%" p={0}>
      {children}
    </Container>
  );
};
