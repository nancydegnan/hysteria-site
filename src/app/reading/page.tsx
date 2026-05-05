import type { Metadata } from "next";
import ReadingContent from "./content";

export const metadata: Metadata = {
  title: "The Library | Endometriosis Books, Podcasts & Resources",
  description:
    "The books, podcasts, and resources that actually helped. Curated by someone who spent years finding what works, so you don't have to.",
  openGraph: {
    title: "The Library | Endometriosis Books, Podcasts & Resources",
    description:
      "The books, podcasts, and resources that actually helped. Curated by someone who spent years finding what works, so you don't have to.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Library | Endometriosis Books, Podcasts & Resources",
    description:
      "The books, podcasts, and resources that actually helped. Curated by someone who spent years finding what works, so you don't have to.",
  },
};

export default function ReadingPage() {
  return <ReadingContent />;
}
