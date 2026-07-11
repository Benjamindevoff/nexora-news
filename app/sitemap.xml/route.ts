const paths = [
  "",
  "about",
  "contact",
  "editorial-policy",
  "corrections-policy",
  "privacy",
  "terms",
  "cookies",
  "dmca",

  "article/how-small-ai-models-are-changing-on-device-computing",
  "article/what-ai-benchmarks-can-and-cannot-prove",
  "article/passkeys-explained-beyond-the-password",
  "article/zero-trust-is-an-architecture-not-a-product",
  "article/why-software-supply-chain-security-matters",
  "article/why-typescript-became-a-default-for-large-web-projects",
  "article/how-to-evaluate-an-open-source-dependency",
  "article/why-web-performance-is-an-accessibility-issue",
  "article/what-data-centers-mean-for-local-power-grids",
  "article/the-real-tradeoffs-of-satellite-internet",
  "article/how-digital-public-services-can-earn-trust",
  "article/why-ai-regulation-keeps-returning-to-transparency",
  "article/why-semiconductor-policy-is-about-more-than-factories",
  "article/how-to-read-claims-about-green-technology",
  "article/a-practical-guide-to-verifying-breaking-news",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const baseUrl = "https://nexoranews.xyz";
  const today = new Date().toISOString().split("T")[0];

  const urls = paths
    .map((path) => {
      const url = path ? `${baseUrl}/${path}` : `${baseUrl}/`;
      const isArticle = path.startsWith("article/");

      return `
  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${isArticle ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "" ? "1.0" : isArticle ? "0.8" : "0.6"}</priority>
  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}