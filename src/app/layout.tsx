import { FC } from "react";
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

export const metadata = {
  title: "Filatique",
  description: "Filatique Music Project Website",
};

const RootLayout: FC<Component> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
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
