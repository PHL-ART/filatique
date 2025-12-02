import { Header } from "@shared/ui/Header";
import { Anchor, Box } from "@mantine/core";
import classes from "./page.module.css";

export default function Info() {
  const linkFont = "'JostExtraBold', sans-serif";

  return (
    <>
      <Header>
        <Box className={classes.navigationLinks}>
          <Anchor
            href="#bio"
            className={classes.navigationLink}
            style={{ fontFamily: linkFont }}
          >
            Bio
          </Anchor>
          <span className={classes.navigationDivider} aria-hidden="true">
            &middot;
          </span>
          <Anchor
            href="#contacts"
            className={classes.navigationLink}
            style={{ fontFamily: linkFont }}
          >
            Contacts
          </Anchor>
        </Box>
      </Header>
    </>
  );
}
