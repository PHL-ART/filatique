import { FC } from "react";
import { Component } from "@model/index";
import classes from "./Title.module.css";

export const Title: FC<Component> = ({ children }) => {
  return <div className={classes.title}>{children}</div>;
};
