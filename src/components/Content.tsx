import { Container } from "@mantine/core";
import { Component } from "@model/index";
import { FC } from "react";

export const Content: FC<Component> = ({ children }) => {
  return (
    <Container fluid h="100%" p={0} style={{position: 'relative'}}>
      {children}
    </Container>
  );
};
