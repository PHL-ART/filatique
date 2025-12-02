import { Header } from "@shared/ui/Header";
import { ReleaseList } from "@entities/releases/ui/ReleaseList";
import { Anchor, Box } from "@mantine/core";
import classes from "./page.module.css";

export default function Listen() {
  return (
    <>
      <Header>
        <Box className={classes.navigationLinks}>
          <Anchor href="#releases" className={classes.navigationLink}>
            Releases
          </Anchor>
          <span className={classes.navigationDivider} aria-hidden="true">
            &middot;
          </span>
          <Anchor href="#mixes" className={classes.navigationLink}>
            Mixes
          </Anchor>
        </Box>
      </Header>
      <ReleaseList />
    </>
  );
}
