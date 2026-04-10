import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";import "./globals.css";
import { cn } from "@/lib/utils";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-sans",
})


export const metadata: Metadata = {
  title: "Alejandro Prieto",
  description: "Architectonical portfolio of Alejandro Prieto, an architect based in Chihuahua City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bebasNeue.variable, dmSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
