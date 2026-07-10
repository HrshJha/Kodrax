import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";

export const geistSans = Geist({
  display: "swap",
  preload: true,
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

export const geistMono = Geist_Mono({
  display: "swap",
  preload: false,
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const inter = Inter({
  display: "swap",
  preload: true,
  subsets: ["latin"],
  variable: "--font-inter"
});

export const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  preload: false,
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const fontClassName = `${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetBrainsMono.variable}`;
