import { FC } from "react";
import { Component } from "@model/index";
import classes from './MainLayout.module.css';
import { ScrollArea, ScrollAreaAutosize } from "@mantine/core";

export const MainLayout: FC<Component> = ({ children }) => {
  return (

    <main className={classes.mainLayout}>
      <ScrollArea offsetScrollbars scrollbarSize={16}>
        {children}
      </ScrollArea>
    </main>
  );
};
