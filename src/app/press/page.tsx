import { Header } from "@shared/ui/Header";
import { PressList } from "@entities/press/ui/PressList";
// import classes from "./page.module.css";

export default function Press() {
  return (
    <>
      <Header>
        Press
      </Header>
      <PressList />
    </>
  );
}
