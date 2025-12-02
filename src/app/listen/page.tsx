import type { Metadata } from "next";
import { Header } from "@shared/ui/Header";
import { ReleaseList } from "@entities/releases/ui/ReleaseList";
import { HeaderNavigation } from "@shared/ui/HeaderNavigation";
import { prisma } from "@shared/lib/prisma";
import { getAbsoluteUrl, siteConfig } from "@shared/config/site";

const navigationItems = [
  { href: "#releases", label: "Releases" },
  { href: "#mixes", label: "Mixes" },
];

export async function generateMetadata(): Promise<Metadata> {
  const [totalReleases, mixCount, latestRelease] = await Promise.all([
    prisma.release.count(),
    prisma.release.count({ where: { type: "MIX" } }),
    prisma.release.findFirst({
      orderBy: { dateReleased: "desc" },
      select: { title: true, imageURL: true },
    }),
  ]);

  const description = `Listen to ${totalReleases} releases including ${mixCount} mixes from Filatique’s catalog.`;

  return {
    title: "Listen",
    description,
    alternates: {
      canonical: getAbsoluteUrl("/listen"),
    },
    openGraph: {
      title: `Listen | ${siteConfig.name}`,
      description,
      url: getAbsoluteUrl("/listen"),
      images: [
        {
          url: getAbsoluteUrl(latestRelease?.imageURL ?? siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: latestRelease?.title ?? "Filatique releases",
        },
      ],
    },
  };
}

export default function Listen() {
  return (
    <>
      <Header>
        <HeaderNavigation items={navigationItems} />
      </Header>
      <ReleaseList />
    </>
  );
}
