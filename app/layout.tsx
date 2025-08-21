import type { Metadata } from "next";
import { inconsolata } from "./ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Conference Ticket Generator",
  description: "Generate tickets for your conference with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} font-sans`}>{children}</body>
    </html>
  );
}
