import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClientProvider";
import AudioProvider from "@/providers/AudioProviders";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "applepod",
  description: "Generate your applepod using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>
              {children}
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
