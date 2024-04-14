import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio by IcTxDiogo",
  description: "IcTxDiogo's portfolio to show his projects and skills",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
