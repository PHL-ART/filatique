import type { Metadata } from "next";
import { MainPageBackground } from "@shared/ui/MainPageBackground";
import { siteConfig, getAbsoluteUrl } from "@shared/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function Home() {

  return (
    <MainPageBackground />
  );
}
