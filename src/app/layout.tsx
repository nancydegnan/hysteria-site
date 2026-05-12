import type { Metadata } from "next";
import { Inter, Lora, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  metadataBase: new URL("https://thenocureclub.com"),
  title: "The No Cure Club | Endometriosis & Pelvic Pain Community",
  description:
    "A community and curation hub for people living with endometriosis and pelvic pain. Resources, tools, and the women who get it. Started by one of us.",
  verification: {
    google: "IMiLn6jqQWYUC3NG0a9ESA7s3hzK4dDF0oAQVilVllk",
  },
  openGraph: {
    title: "The No Cure Club | Endometriosis & Pelvic Pain Community",
    description:
      "A community and curation hub for people living with endometriosis and pelvic pain. Resources, tools, and the women who get it. Started by one of us.",
    type: "website",
    images: [
      {
        url: "/thenocureclubopengraph.png",
        width: 1200,
        height: 630,
        alt: "The No Cure Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The No Cure Club | Endometriosis & Pelvic Pain Community",
    description:
      "A community and curation hub for people living with endometriosis and pelvic pain. Resources, tools, and the women who get it. Started by one of us.",
    images: ["/thenocureclubopengraph.png"],
  },
  other: {
    "impact-site-verification": "9da3efaa-094e-416c-b1fb-a8dd5e3b68d2",
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
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          src="https://js.supascribe.com/v1/loader/zNBxYKLH0LWTTh1tMqpiAJjXwEt2.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
