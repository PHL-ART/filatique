import type { Metadata } from "next";
import { Header } from "@shared/ui/Header";
import { PressList } from "@entities/press/ui/PressList";
import { siteConfig, getAbsoluteUrl } from "@shared/config/site";

export const metadata: Metadata = {
  title: "Press",
  description: "Articles, interviews, and press mentions about Filatique.",
  alternates: {
    canonical: getAbsoluteUrl("/press"),
  },
  openGraph: {
    title: "Press | Filatique",
    description: "Articles, interviews, and press mentions about Filatique.",
    url: getAbsoluteUrl("/press"),
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Filatique press coverage",
      },
    ],
  },
};

export default function Press() {
  return (
    <>
      <Header>Press</Header>
      <PressList />
    </>
  );
}
