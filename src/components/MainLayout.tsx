import { FC } from "react";
import { Component } from "@model/index";
import classes from './MainLayout.module.css';

export const MainLayout: FC<Component> = ({ children }) => {
  return <main className={classes.mainLayout}>{children}</main>;
};
