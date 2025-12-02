const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://filatique.ru";

export const siteConfig = {
  name: "Filatique",
  description:
    "Filatique is a multi-instrumental project by Filat Astakhov combining jazz, hip-hop, and melodic textures into cinematic soundscapes.",
  url: defaultSiteUrl,
  ogImage: "/assets/images/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/png",
  keywords: [
    "filatique",
    "filat astakhov",
    "jazz",
    "hip-hop",
    "electronic music",
    "russian music",
  ],
  locale: "en_US",
  creator: "Filat Astakhov",
};

export const getAbsoluteUrl = (path: string) => {
  try {
    return new URL(path, siteConfig.url).toString();
  } catch {
    return path;
  }
};

