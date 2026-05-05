import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-05");

  return [
    { url: "https://thenocureclub.com", lastModified },
    { url: "https://thenocureclub.com/about", lastModified },
    { url: "https://thenocureclub.com/tools", lastModified },
    { url: "https://thenocureclub.com/reading", lastModified },
    { url: "https://thenocureclub.com/community", lastModified },
    { url: "https://thenocureclub.com/hysteria-doc", lastModified },
    { url: "https://thenocureclub.com/practitioners", lastModified },
  ];
}
