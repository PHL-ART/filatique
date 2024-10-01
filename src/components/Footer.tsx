import { Group } from "@mantine/core";
import Link from "next/link";
import classes from "./Footer.module.css";
import { IconPlus } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Group align="center" justify="space-around" h="100%" gap={0}>
        <Link href="/" className={classes.link}>
          <IconPlus size={36} color="white" />
        </Link>
        <Link href="/listen" className={classes.link}>
          Listen
        </Link>
        <Link href="/press" className={classes.link}>
          Press
        </Link>
        <Link href="/info" className={classes.link}>
          Info
        </Link>
      </Group>
    </footer>
  );
}
