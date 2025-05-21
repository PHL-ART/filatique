import { Container } from "@mantine/core";
import { Component } from "@model/index";
import { FC } from "react";

export const Content: FC<Component> = ({ children }) => {
  return (
    <Container fluid h="100%" pos={"relative"} px={"4rem"}>
      {children}
    </Container>
  );
};
