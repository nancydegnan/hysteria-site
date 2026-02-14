import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYSTERIA — A Documentary About Endometriosis",
  description:
    "I went looking for a diagnosis. I found a global crisis. HYSTERIA is a documentary film exposing the endometriosis epidemic.",
  openGraph: {
    title: "HYSTERIA — A Documentary About Endometriosis",
    description:
      "I went looking for a diagnosis. I found a global crisis.",
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
      <body className={`${anton.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
