import { FC } from "react";
import { ThemeProvider } from "@components/ThemeProvider";
import { Component } from "@model/index";
import { Footer } from "@components/Footer";
import { MainLayout } from "@components/MainLayout";
import "@mantine/core/styles.css";
import "./global.css";
import { Content } from "@components/Content";

export const metadata = {
  title: "Filatique",
  description: "Filatique Music Project Website",
};

const RootLayout: FC<Component> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainLayout>
            <Content>{children}</Content>
            <Footer />
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
