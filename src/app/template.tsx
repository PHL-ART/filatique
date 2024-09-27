import { FC } from "react";
import { ThemeProvider } from "@components/ThemeProvider";
import { Component } from "@model/index";
import Transition from "@shared/ui/Transition";
import { AnimatePresence } from "framer-motion";

const RootTemplate: FC<Component> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <Transition>{children}</Transition>;
    </AnimatePresence>
  );
};
export default RootTemplate;
