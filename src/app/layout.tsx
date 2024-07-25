import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Information from "@/Components/Information";

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
      <head></head>
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar />
        {/* <div>
          <Information />
        </div> */}
        {children}
      </body>
    </html>
  );
}
