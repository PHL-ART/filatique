import { Header } from "@shared/ui/Header";
import { HeaderNavigation } from "@shared/ui/HeaderNavigation";
import { BioSection } from "@shared/ui/BioSection";
import { ContactsSection } from "@shared/ui/ContactsSection";
import classes from "./page.module.css";

const navigationItems = [
  { href: "#bio", label: "Bio" },
  { href: "#contacts", label: "Contacts" },
];

export default function Info() {
  return (
    <>
      <Header>
        <HeaderNavigation items={navigationItems} />
      </Header>
      <div className={classes.infoPage}>
        <BioSection />
        <ContactsSection />
      </div>
    </>
  );
}
