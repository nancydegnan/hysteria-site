import type { Metadata } from "next";
import HysteriaContent from "./content";

export const metadata: Metadata = {
  title: "HYSTERIA | A Documentary on Women's Pain & Medical Dismissal",
  description:
    "One woman's pursuit of remission from her endometriosis becomes an investigation into the over 4,000-year lineage of medical dismissal that taught women their pain was the problem.",
  openGraph: {
    title: "HYSTERIA | A Documentary on Women's Pain & Medical Dismissal",
    description:
      "One woman's pursuit of remission from her endometriosis becomes an investigation into the over 4,000-year lineage of medical dismissal that taught women their pain was the problem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYSTERIA | A Documentary on Women's Pain & Medical Dismissal",
    description:
      "One woman's pursuit of remission from her endometriosis becomes an investigation into the over 4,000-year lineage of medical dismissal that taught women their pain was the problem.",
  },
};

export default function HysteriaDoc() {
  return <HysteriaContent />;
}
