import type { MetadataRoute } from "next";

const routes = ["", "ai", "cybersecurity", "programming", "politics", "world-news", "opinion", "latest", "about", "contact", "editorial-policy", "corrections-policy", "privacy", "terms", "cookies", "ethics", "advertising", "dmca"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://nexoranews.xyz/${route}`,
    lastModified: new Date("2026-07-10T12:00:00Z"),
    changeFrequency: route === "" || route === "latest" ? "hourly" : "daily",
    priority: route === "" ? 1 : route.length < 16 ? 0.8 : 0.5,
  }));
}
