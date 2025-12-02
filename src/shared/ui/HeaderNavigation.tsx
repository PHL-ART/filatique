import { FC, Fragment } from "react";
import { Anchor, Box } from "@mantine/core";
import classes from "./HeaderNavigation.module.css";

type HeaderNavigationItem = {
  href: string;
  label: string;
};

type HeaderNavigationProps = {
  items: HeaderNavigationItem[];
};

const linkFont = "'JostExtraBold', sans-serif";

export const HeaderNavigation: FC<HeaderNavigationProps> = ({ items }) => {
  return (
    <Box className={classes.navigationLinks}>
      {items.map((item, index) => (
        <Fragment key={item.href}>
          {index > 0 && (
            <span className={classes.navigationDivider} aria-hidden="true">
              &middot;
            </span>
          )}
          <Anchor
            href={item.href}
            className={classes.navigationLink}
            style={{ fontFamily: linkFont }}
          >
            {item.label}
          </Anchor>
        </Fragment>
      ))}
    </Box>
  );
};

