import { FC } from "react";
import { Component } from "@model/index";
import classes from "./Header.module.css";

export const Header: FC<Component> = ({ children }) => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>{children}</div>
    </header>
  );
};
