import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savory",
  description: "Savor The Moment, Savor The Flavor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+AT:ital,wght@0,100..400;1,100..400&family=Playwrite+DK+Loopet&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${inter.className} `}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
