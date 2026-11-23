import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/src/logo.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";
import { customTheme } from "./theme";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light dark",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "ForAIMentors | %s",
    default: "ForAIMentors",
  },
  description:
    "ForAIMentors brings people who want to learn AI together with AI specialists and software engineers. Develop practical skills, learn how AI technologies work, and discover opportunities in tech.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://foraimentors.com/"),
  openGraph: {
    title: "ForAIMentors",
    siteName: "ForAIMentors",
    description:
      "ForAIMentors brings people who want to learn AI together with AI specialists and software engineers across the United States and Taiwan.",
    url: "https://foraimentors.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "ForAIMentors",
      },
    ],
  },
  twitter: {
    title: "ForAIMentors",
    description:
      "ForAIMentors brings people who want to learn AI together with AI specialists and software engineers across the United States and Taiwan.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "ForAIMentors",
      },
    ],
  },
  alternates: {
    canonical: "https://foraimentors.com/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <Providers>
          <Cookie />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
