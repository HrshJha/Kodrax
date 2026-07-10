import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { siteMetadata } from "@/config/metadata";
import { fontClassName } from "@/lib/fonts";
import { AppProviders } from "@/providers/app-providers";

import "./globals.css";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  themeColor: "#050505",
  width: "device-width"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
