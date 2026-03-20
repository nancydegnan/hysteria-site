import type { Metadata } from "next";
import { Inter, Lora, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "No Cure Club — An Endometriosis Community & Curation Hub",
  description:
    "No Cure Club is a community and curation hub for people living with endometriosis. Resources, stories, advocacy, and the HYSTERIA documentary — because no one should fight alone.",
  openGraph: {
    title: "No Cure Club — An Endometriosis Community & Curation Hub",
    description:
      "Resources, stories, and solidarity for people living with endometriosis. No cure. No silence. No surrender.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
