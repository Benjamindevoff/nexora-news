const paths = [
  "",
  "ai",
  "cybersecurity",
  "programming",
  "politics",
  "world-news",
  "opinion",
  "latest",
  "about",
  "contact",
  "editorial-policy",
  "corrections-policy",
  "privacy",
  "terms",
  "cookies",
  "ethics",
  "advertising",
  "dmca",

  "ai/the-race-for-smaller-smarter-ai-moves-from-the-cloud-to-the-edge",
  "cybersecurity/security-teams-rethink-identity-as-the-network-perimeter-fades",
  "programming/why-typed-systems-are-winning-the-next-era-of-web-development",
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const baseUrl = "https://nexoranews.xyz";

  const urls = paths
    .map((path) => {
      const url = path ? `${baseUrl}/${path}` : `${baseUrl}/`;

      return `
  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>2026-07-11</lastmod>
    <changefreq>${path === "" || path === "latest" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "" ? "1.0" : path.includes("/") ? "0.8" : "0.7"}</priority>
  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=900",
    },
  });
}