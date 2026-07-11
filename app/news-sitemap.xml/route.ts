const paths = ["ai/the-race-for-smaller-smarter-ai-moves-from-the-cloud-to-the-edge", "cybersecurity/security-teams-rethink-identity-as-the-network-perimeter-fades", "programming/why-typed-systems-are-winning-the-next-era-of-web-development"];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${paths.map((path) => `<url><loc>https://nexoranews.xyz/${path}</loc><news:news><news:publication><news:name>Nexora News</news:name><news:language>en</news:language></news:publication><news:publication_date>2026-07-10T12:00:00Z</news:publication_date><news:title>Fictional demonstration story</news:title></news:news></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=900" } });
}
