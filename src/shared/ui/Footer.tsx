"use client";

import { FC, useContext } from 'react';
import { Group } from '@mantine/core';
import Link from 'next/link';
import classes from './Footer.module.css';
import { IconMenu2, IconHome } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import MobileMenuModal from './MobileMenuModal';
import { ResoucereLoaderContext } from './ResourceLoader';

export const Footer: FC = () => {
  const { modalIsOpen, setModalOpen } = useContext(ResoucereLoaderContext);
  const currentPathname = usePathname();
  const isOnRootPage = currentPathname === '/';

  return (
    <footer className={classes.footer}>
      <Group align="center" justify={"space-around"} h="100%" gap={0}>

        {!isOnRootPage && (
          <div className={classes.playButtonWrapper}>
            <Link href="/" className={classes.link}>
              <IconHome size={36} color="white" />
            </Link>
          </div>
        )}

        <div className={classes.menu}>
          <div className={classes.menuLink}>
            <IconMenu2 size={24} color="black" onClick={() => setModalOpen(true)} />
          </div>
          <MobileMenuModal opened={modalIsOpen} onClose={() => setModalOpen(false)} />
        </div>
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
};

export default Footer;