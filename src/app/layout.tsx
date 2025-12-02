import { FC } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@shared/ui/ThemeProvider";
import { Component } from "@model/index";
import { Footer } from "@shared/ui/Footer";
import { MainLayout } from "@shared/ui/MainLayout";
import "@mantine/core/styles.css";
import "./global.css";
import { Content } from "@shared/ui/Content";
import Transition from "@shared/ui/Transition";
import { PageLoadingBar } from "@shared/ui/PageLoadingBar";
import { ResourceLoader } from "@shared/ui/ResourceLoader";
import { AnalyticsScripts } from "@shared/ui/AnalyticsScripts";
import { siteConfig, getAbsoluteUrl } from "@shared/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  authors: [{ name: siteConfig.creator }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [getAbsoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const RootLayout: FC<Component> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AnalyticsScripts />
          <PageLoadingBar />
          <ResourceLoader>
            <MainLayout>
              <Transition>
                <Content>{children}</Content>
              </Transition>
              <Footer />
            </MainLayout>
          </ResourceLoader>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
