import type { Metadata } from "next";
import ToolsContent from "./content";

export const metadata: Metadata = {
  title: "The Outfitter | Tools for Endometriosis & Pelvic Pain",
  description:
    "The devices, products, and gear that earned their place in a real remission protocol. Far-infrared, PEMF, fermented foods, and the rest.",
  openGraph: {
    title: "The Outfitter | Tools for Endometriosis & Pelvic Pain",
    description:
      "The devices, products, and gear that earned their place in a real remission protocol. Far-infrared, PEMF, fermented foods, and the rest.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Outfitter | Tools for Endometriosis & Pelvic Pain",
    description:
      "The devices, products, and gear that earned their place in a real remission protocol. Far-infrared, PEMF, fermented foods, and the rest.",
  },
};

export default function ToolsPage() {
  return <ToolsContent />;
}
