import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const siteMetadata: Metadata = {
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  description: siteConfig.description,
  icons: {
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    type: "website",
    url: siteConfig.url
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  twitter: {
    card: "summary",
    description: siteConfig.description,
    title: siteConfig.title
  }
};
