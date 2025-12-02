import type { Metadata } from "next";
import { Header } from "@shared/ui/Header";
import { HeaderNavigation } from "@shared/ui/HeaderNavigation";
import { BioSection } from "@shared/ui/BioSection";
import { ContactsSection } from "@shared/ui/ContactsSection";
import { siteConfig, getAbsoluteUrl } from "@shared/config/site";
import classes from "./page.module.css";

const navigationItems = [
  { href: "#bio", label: "Bio" },
  { href: "#contacts", label: "Contacts" },
];

export const metadata: Metadata = {
  title: "Info",
  description:
    "Learn more about Filatique, the multi-instrumental project by Filat Astakhov, and find official contact channels.",
  alternates: {
    canonical: getAbsoluteUrl("/info"),
  },
  openGraph: {
    title: "Info | Filatique",
    description:
      "Discover Filatique’s story and official contact channels for collaborations and press.",
    url: getAbsoluteUrl("/info"),
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Filatique portrait",
      },
    ],
  },
};

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
