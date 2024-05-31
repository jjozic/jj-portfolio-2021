import React from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  weight: ["400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sourceSans.className}>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
