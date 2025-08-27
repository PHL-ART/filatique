import { Container } from "@mantine/core";
import { Component } from "@model/index";
import { FC } from "react";

export const Content: FC<Component> = ({ children }) => {
  return (
    <Container fluid h="100%" pos={"relative"} px={{ base: "4rem", sm: '2rem' }} py={{ sm: '5rem' }}>
      {children}
    </Container>
  );
};
