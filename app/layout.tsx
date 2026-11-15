import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Rumki Akter — Frontend Developer",
  description:
    "Portfolio of Rumki Akter, a frontend developer building responsive React and Next.js websites.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
