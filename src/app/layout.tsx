import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./components";

export const metadata: Metadata = {
  title: "Reasons to not Split",
  description: "A podcast to discuss facts surrounding the proposed Alpine School District reconfigurations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="dots" />
        <Header />
        {children}
        <div className="bottom-gradient" />
        Jonathan Bejarano
        <div/>
        2024
        <div/>
      </body>
    </html>
  );
}
