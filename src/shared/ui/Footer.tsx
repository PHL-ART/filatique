"use client";

import { Group } from "@mantine/core";
import Link from "next/link";
import classes from "./Footer.module.css";
import { IconMenu, IconMenu2, IconPlus } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { PlayButton } from "./PlayButton";

export function Footer() {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <footer className={classes.footer}>
      <Group align="center" justify="space-around" h="100%" gap={0}>
        <>
          {isRoot ? (
            <PlayButton />
          ) : (
            <Link href="/" className={classes.link}>
              <IconPlus size={36} color="white" />
            </Link>
          )}
        </>
        <Link href="/listen" className={classes.link}>
          Listen
        </Link>
        <Link href="/press" className={classes.link}>
          Press
        </Link>
        <Link href="/info" className={classes.link}>
          Info
        </Link>
        <div className={classes.menu}>
          <IconMenu2 size={24} color="white" /> Menu
        </div>
      </Group>
    </footer>
  );
}
