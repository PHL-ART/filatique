import { Header } from "@shared/ui/Header";
import { ReleaseList } from "@entities/releases/ui/ReleaseList";
import { Anchor, Box } from "@mantine/core";
import classes from "./page.module.css";

export default function Listen() {
  const linkFont = "'JostExtraBold', sans-serif";

  return (
    <>
      <Header>
        <Box className={classes.navigationLinks}>
          <Anchor
            href="#releases"
            className={classes.navigationLink}
            style={{ fontFamily: linkFont }}
          >
            Releases
          </Anchor>
          <span className={classes.navigationDivider} aria-hidden="true">
            &middot;
          </span>
          <Anchor
            href="#mixes"
            className={classes.navigationLink}
            style={{ fontFamily: linkFont }}
          >
            Mixes
          </Anchor>
        </Box>
      </Header>
      <ReleaseList />
    </>
  );
}
